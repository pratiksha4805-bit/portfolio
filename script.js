// Cursor glow follow karo
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Typewriter animation
const words = [
  'Frontend Developer.',
  'Creative Coder.',
  'Problem Solver.'
];
let wi = 0, ci = 0, deleting = false;
const twEl = document.getElementById('typewriter');

function type() {
  const word = words[wi];
  if (!deleting) {
    twEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    twEl.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Scroll fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar active link highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      links.forEach(l => l.style.color = '');
      const active = document.querySelector('.nav-links a[href="#${sec.id}"]');
      if (active) active.style.color = '#00d4ff';
    }
  });
});