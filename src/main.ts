import '@fontsource-variable/inter';

import './styles/global.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/contact.css';

import { renderNavigation } from './render/navigation';
import { renderHero } from './render/hero';
import { renderProjects } from './render/projects';
import { renderAbout } from './render/about';
import { renderSkills } from './render/skills';
import { renderContact } from './render/contact';
import { initTheme } from './scripts/theme';
import { initNavigation } from './scripts/navigation';
import { initCopyEmail } from './scripts/copy-email';

function initializeApp(): void {
  const header = document.getElementById('site-header');
  const hero = document.getElementById('hero-section');
  const projects = document.getElementById('projects-section');
  const about = document.getElementById('about-section');
  const skills = document.getElementById('skills-section');
  const contact = document.getElementById('contact-section');

  if (!header || !hero || !projects || !about || !skills || !contact) {
    throw new Error('Missing required initializeApp points in index.html');
  }

  renderNavigation(header);
  renderHero(hero);
  renderAbout(about);
  renderSkills(skills);
  renderProjects(projects);
  renderContact(contact);

  initTheme();
  initNavigation();
  initCopyEmail();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
