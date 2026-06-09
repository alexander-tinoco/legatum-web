(function () {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const close = document.querySelector('[data-menu-close]');

  let headerTicking = false;
  function setHeader() {
    if (!header || headerTicking) return;
    headerTicking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
      headerTicking = false;
    });
  }

  const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(e) {
    if (e.key !== 'Tab' || !menu) return;
    const items = menu.querySelectorAll(FOCUSABLE);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === 'Escape') setMenu(false);
    else trapFocus(e);
  }

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', open);
    if (open) {
      document.addEventListener('keydown', onKeydown);
      (close || menu.querySelector(FOCUSABLE))?.focus();
    } else {
      document.removeEventListener('keydown', onKeydown);
      toggle.focus();
    }
  }

  window.addEventListener('scroll', setHeader, { passive: true });
  setHeader();
  toggle?.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const faqButtons = document.querySelectorAll('[data-faq-trigger]');
  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      // Close all
      faqButtons.forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
        btn.closest('.faq-item')?.classList.remove('is-open');
      });
      // Open this one if it was closed
      if (!isOpen) {
        button.setAttribute('aria-expanded', 'true');
        button.closest('.faq-item')?.classList.add('is-open');
      }
    });
  });

  // Scroll reveal via IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else if (revealEls.length) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
})();
