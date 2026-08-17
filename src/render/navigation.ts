import { navItems } from '../data/nav';
import { profile } from '../data/profile';
import { createCVButton, createThemeToggle } from './shared';
import { logoIcon, uiIcon } from '../lib/icons';

export function renderNavigation(container: HTMLElement): void {
  const header = document.createElement('header');
  header.id = 'site-nav';
  header.className = 'nav';

  const inner = document.createElement('div');
  inner.className = 'nav__inner container';

  const brand = document.createElement('a');
  brand.href = '#home';
  brand.className = 'nav__brand';
  brand.setAttribute('aria-label', `${profile.name} — Home`);
  brand.appendChild(logoIcon());

  const nav = document.createElement('nav');
  nav.className = 'nav__links';
  nav.setAttribute('aria-label', 'Primary');

  const navList = document.createElement('ul');
  navItems.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.dataset.navLink = '';
    link.dataset.target = item.href.slice(1);
    link.textContent = item.label;
    li.appendChild(link);
    navList.appendChild(li);
  });
  nav.appendChild(navList);

  const actions = document.createElement('div');
  actions.className = 'nav__actions';

  const cvWrap = document.createElement('span');
  cvWrap.className = 'nav__cv';
  cvWrap.appendChild(createCVButton('secondary'));

  const hamburger = document.createElement('button');
  hamburger.id = 'mobile-menu-toggle';
  hamburger.className = 'nav__hamburger';
  hamburger.type = 'button';
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-controls', 'mobile-menu');
  hamburger.setAttribute('aria-label', 'Toggle navigation menu');
  hamburger.append(uiIcon('menu', 20, 'icon-menu'), uiIcon('close', 20, 'icon-close'));

  actions.append(createThemeToggle(), cvWrap, hamburger);
  inner.append(brand, nav, actions);

  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.className = 'mobile-menu';
  mobileMenu.hidden = true;

  const mobileList = document.createElement('ul');
  navItems.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.dataset.navLink = '';
    link.dataset.mobileLink = '';
    link.dataset.target = item.href.slice(1);
    link.textContent = item.label;
    li.appendChild(link);
    mobileList.appendChild(li);
  });

  const mobileCv = document.createElement('span');
  mobileCv.className = 'mobile-menu__cv';
  mobileCv.appendChild(createCVButton('primary'));

  mobileMenu.append(mobileList, mobileCv);
  header.append(inner, mobileMenu);
  container.replaceChildren(header);
}
