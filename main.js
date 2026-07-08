/* ===================================================================
   PORTFOLIO — main.js
   Small, dependency-free interactions.
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu after tapping a link
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---- Current year in footer ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Reveal sections on scroll ---- */
  const revealEls = document.querySelectorAll('.section__head, .featured__grid, .card, .post, .log__item, .about__grid, .colophon__inner');
  revealEls.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Placeholder interactive demo ----
     This is a stand-in. We'll replace it with your real "signature"
     piece once we know your field. ---- */
  const demoBtn = document.getElementById('demoBtn');
  const demoReadout = document.getElementById('demoReadout');
  if (demoBtn && demoReadout) {
    const lines = [
      '> signature project loads here — coming soon',
      '> candidate: phishing red-flag analyzer',
      '> candidate: password entropy lab',
      '> status: in the lab. check back.'
    ];
    let i = 0;
    demoBtn.addEventListener('click', () => {
      i = (i + 1) % lines.length;
      demoReadout.textContent = lines[i];
    });
  }

});
