import { profile } from '../data/profile';
import { createCVButton, createSocialLinks } from './shared';
import { decorativeIllustration } from '../lib/icons';

export function renderHero(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero';

  const inner = document.createElement('div');
  inner.className = 'container hero__inner';

  const content = document.createElement('div');
  content.className = 'hero__content';

  const heading = document.createElement('h1');
  heading.textContent = profile.name;

  const positioning = document.createElement('p');
  positioning.className = 'hero__positioning';
  positioning.textContent = profile.positioning;

  const actions = document.createElement('div');
  actions.className = 'hero__actions';

  const aboutLink = document.createElement('a');
  aboutLink.href = '#about';
  aboutLink.className = 'btn btn-primary';
  aboutLink.textContent = 'About Me';

  actions.append(aboutLink, createCVButton('secondary'));
  content.append(heading, positioning, actions, createSocialLinks('hero__social'));

  const visual = document.createElement('div');
  visual.className = 'hero__visual';
  visual.setAttribute('aria-hidden', 'false');

  const illustrationWrap = document.createElement('div');
  illustrationWrap.className = 'hero__illustration';
  illustrationWrap.appendChild(decorativeIllustration());

  const portraitWrap = document.createElement('div');
  portraitWrap.className = 'hero__portrait';

  const portrait = document.createElement('img');
  portrait.src = profile.imagePath;
  portrait.alt = `Portrait of ${profile.name}`;
  portrait.width = 480;
  portrait.height = 600;
  portrait.loading = 'eager';
  portrait.setAttribute('fetchpriority', 'high');

  portraitWrap.appendChild(portrait);
  visual.append(illustrationWrap, portraitWrap);
  inner.append(content, visual);
  section.appendChild(inner);
  container.replaceChildren(section);
}
