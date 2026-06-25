// Pegasus Bay Automotive — shared interactions

// Intro overlay
window.addEventListener('load', function () {
  var intro = document.getElementById('intro');
  if (intro) { setTimeout(function () { intro.classList.add('done'); }, 850); }
});

// Mobile nav
var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
}

// Hero rolling slides
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1 && !reduce) {
  var i = 0;
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 6000);
}

// Scroll reveal
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
