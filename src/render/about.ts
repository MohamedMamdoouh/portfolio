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

  const grid = document.createElement('div');
  grid.className = 'about__grid';

  const introBlock = document.createElement('div');
  introBlock.className = 'about__intro';

  const introHeading = document.createElement('h3');
  introHeading.textContent = 'Introduction';

  const introText = document.createElement('p');
  introText.textContent = profile.introduction;

  introBlock.append(introHeading, introText);

  const educationBlock = document.createElement('div');
  educationBlock.className = 'about__education';

  const educationHeading = document.createElement('h3');
  educationHeading.textContent = 'Education';

  const degree = document.createElement('p');
  degree.className = 'about__degree';
  degree.textContent = education.degree;

  const institution = document.createElement('p');
  institution.className = 'text-muted';
  institution.textContent = `${education.institution} · ${education.graduation}`;

  educationBlock.append(educationHeading, degree, institution);
  grid.append(introBlock, educationBlock);
  inner.append(intro, grid);
  section.appendChild(inner);
  container.replaceChildren(section);
}
