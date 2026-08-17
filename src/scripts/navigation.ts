const SCROLL_SECTIONS = ['home', 'about', 'skills', 'projects'] as const;

function getSectionTop(element: HTMLElement): number {
  return element.getBoundingClientRect().top + window.scrollY;
}

export function initNavigation(): void {
  const nav = document.getElementById('site-nav');
  const hamburger = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));

  const pageSections = SCROLL_SECTIONS.map((id) => document.getElementById(id)).filter(
    (el): el is HTMLElement => el !== null,
  );

  function setScrolled(): void {
    if (!nav) return;
    nav.classList.toggle('nav--scrolled', window.scrollY > 8);
  }

  function updateActiveSection(): void {
    const navHeight = nav?.offsetHeight ?? 64;
    const marker = window.scrollY + navHeight + 64;

    let activeId = '';
    for (const section of pageSections) {
      if (getSectionTop(section) <= marker) {
        activeId = section.id;
      }
    }

    navLinks.forEach((link) => {
      if (activeId !== 'home' && link.dataset.target === activeId) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  let ticking = false;
  function onScroll(): void {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setScrolled();
      updateActiveSection();
      ticking = false;
    });
  }

  setScrolled();
  updateActiveSection();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateActiveSection, { passive: true });

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
}
