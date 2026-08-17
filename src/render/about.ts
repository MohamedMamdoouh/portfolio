import { profile, education } from '../data/profile';

export function renderAbout(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about';

  const inner = document.createElement('div');
  inner.className = 'container';

  const intro = document.createElement('div');
  intro.className = 'section-intro';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'About';

  const heading = document.createElement('h2');
  heading.textContent = 'Background';

  intro.append(eyebrow, heading);

  const panel = document.createElement('div');
  panel.className = 'section-panel about__panel';

  const introRow = document.createElement('div');
  introRow.className = 'section-panel__row section-panel__row--start';

  const introHeading = document.createElement('h3');
  introHeading.textContent = 'Introduction';

  const introContent = document.createElement('div');
  introContent.className = 'section-panel__body';

  const introText = document.createElement('p');
  introText.className = 'about__intro';
  introText.textContent = profile.introduction;

  introContent.appendChild(introText);
  introRow.append(introHeading, introContent);

  const educationRow = document.createElement('div');
  educationRow.className = 'section-panel__row section-panel__row--start';

  const educationHeading = document.createElement('h3');
  educationHeading.textContent = 'Education';

  const educationContent = document.createElement('div');
  educationContent.className = 'section-panel__body about__education';

  const degree = document.createElement('p');
  degree.className = 'about__degree';
  degree.textContent = education.degree;

  const meta = document.createElement('p');
  meta.className = 'about__meta';

  const institution = document.createElement('span');
  institution.textContent = education.institution;

  const separator = document.createElement('span');
  separator.className = 'about__meta-sep';
  separator.setAttribute('aria-hidden', 'true');
  separator.textContent = '·';

  const location = document.createElement('span');
  location.textContent = profile.location;

  const graduationSep = document.createElement('span');
  graduationSep.className = 'about__meta-sep';
  graduationSep.setAttribute('aria-hidden', 'true');
  graduationSep.textContent = '·';

  const graduation = document.createElement('span');
  graduation.textContent = education.graduation;

  meta.append(institution, separator, location, graduationSep, graduation);
  educationContent.append(degree, meta);
  educationRow.append(educationHeading, educationContent);

  panel.append(introRow, educationRow);
  inner.append(intro, panel);
  section.appendChild(inner);
  container.replaceChildren(section);
}
