export function initNavigation(): void {
  const nav = document.getElementById('site-nav');
  const hamburger = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));

  function setScrolled(): void {
    if (!nav) return;
    nav.classList.toggle('nav--scrolled', window.scrollY > 8);
  }

  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  function closeMobileMenu(): void {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.hidden = true;
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function openMobileMenu(): void {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.hidden = false;
    hamburger.setAttribute('aria-expanded', 'true');
  }

  hamburger?.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMobileMenu();
    else openMobileMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });

  document.addEventListener('click', (event) => {
    if (!mobileMenu || mobileMenu.hidden) return;
    const target = event.target as Node;
    if (!mobileMenu.contains(target) && !hamburger?.contains(target)) {
      closeMobileMenu();
    }
  });

  const sections = navLinks
    .map((link) => link.dataset.target)
    .filter((id, index, arr): id is string => Boolean(id && arr.indexOf(id) === index))
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const isMatch = link.dataset.target === id;
          if (isMatch) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}
