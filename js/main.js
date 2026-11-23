// Glamping Puglia — main.js

// Mobile nav toggle
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll-reveal for cards
if ('IntersectionObserver' in window) {
  const items = document.querySelectorAll('.card, .intro, .article-body h2');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .55s ease, transform .55s ease';
    io.observe(el);
  });
}

// Active nav link highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) {
    a.style.color = 'var(--gold)';
  }
});

// Footer year
document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });

// Contact e-mail (assembled here so it is not plainly readable in the page source)
document.querySelectorAll('.footer__mail').forEach(a => {
  const addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr;
  a.textContent = addr;
});
