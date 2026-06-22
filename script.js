'use strict';

// ── Page routing ──────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });

  closeMenu();
}

// ── Mobile menu ───────────────────────────────────────────────────
function toggleMenu() {
  const open = document.getElementById('mobileOverlay').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('mobileOverlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Contact form ──────────────────────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('formBtn');
  const original = btn.textContent;

  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#1a6b3c';

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3500);
  }, 800);
}

// ── Nav scroll shadow ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.boxShadow =
    window.scrollY > 8 ? '0 1px 0 0 #242424' : 'none';
}, { passive: true });
