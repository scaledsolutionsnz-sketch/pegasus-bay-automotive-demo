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

// Google review widget rotation
(function(){
  var gr=document.getElementById('gwSlides'); if(!gr) return;
  var revs=gr.querySelectorAll('.gw-slide'), dw=document.getElementById('gwDots');
  var n=revs.length,cur=0,timer=null,dots=[];
  if(dw){for(var k=0;k<n;k++){(function(idx){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Review '+(idx+1));b.addEventListener('click',function(){go(idx);restart();});dw.appendChild(b);dots.push(b);})(k);}}
  function go(x){revs[cur].classList.remove('active');if(dots[cur])dots[cur].classList.remove('on');cur=(x+n)%n;revs[cur].classList.add('active');if(dots[cur])dots[cur].classList.add('on');}
  function start(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;timer=setInterval(function(){go(cur+1);},4500);}
  function restart(){if(timer)clearInterval(timer);start();}
  go(0);start();
  var w=gr.closest('.gwidget');
  if(w){w.addEventListener('mouseenter',function(){if(timer){clearInterval(timer);timer=null;}});w.addEventListener('mouseleave',restart);}
})();

// Gmail-compose email buttons
document.querySelectorAll('a[data-gmail]').forEach(function(a){var to=a.getAttribute('data-user')+'@'+a.getAttribute('data-domain');var su=a.getAttribute('data-su')||'';var body=a.getAttribute('data-body')||'';a.href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(to)+'&su='+su+'&body='+body;a.target='_blank';a.rel='noopener';});

// hero review widget rotation
(function(){var gr=document.getElementById('gwSlides');if(!gr||!gr.querySelector('.hgw-slide'))return;var revs=gr.querySelectorAll('.hgw-slide'),dw=document.getElementById('gwDots');var n=revs.length,cur=0,t=null,dots=[];if(dw){dw.innerHTML='';for(var k=0;k<n;k++){(function(x){var b=document.createElement('button');b.type='button';b.addEventListener('click',function(){go(x);st();});dw.appendChild(b);dots.push(b);})(k);}}function go(x){revs[cur].classList.remove('active');if(dots[cur])dots[cur].classList.remove('on');cur=(x+n)%n;revs[cur].classList.add('active');if(dots[cur])dots[cur].classList.add('on');}function start(){t=setInterval(function(){go(cur+1);},4500);}function st(){if(t)clearInterval(t);start();}go(0);start();})();
