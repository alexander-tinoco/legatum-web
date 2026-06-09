(function () {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const close = document.querySelector('[data-menu-close]');

  function setHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  }

  window.addEventListener('scroll', setHeader, { passive: true });
  setHeader();
  toggle?.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const megaToggle = document.querySelector('[data-mega-toggle]');
  const megaMenu = megaToggle?.closest('.nav-services')?.querySelector('.mega-menu');
  if (megaToggle && megaMenu) {
    megaToggle.addEventListener('click', () => {
      const open = megaToggle.getAttribute('aria-expanded') === 'true';
      megaToggle.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && megaToggle.getAttribute('aria-expanded') === 'true') {
        megaToggle.setAttribute('aria-expanded', 'false');
        megaToggle.focus();
      }
    });
    document.addEventListener('click', (e) => {
      if (!megaToggle.closest('.nav-services').contains(e.target)) {
        megaToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

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
