import { skillCategories } from '../data/skills';
import { createTechChip } from './shared';

export function renderSkills(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'skills';
  section.className = 'skills';

  const inner = document.createElement('div');
  inner.className = 'container';

  const intro = document.createElement('div');
  intro.className = 'section-intro';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'Skills';

  const heading = document.createElement('h2');
  heading.textContent = 'Technologies';

  intro.append(eyebrow, heading);

  const categories = document.createElement('div');
  categories.className = 'skills__categories';

  skillCategories.forEach((category) => {
    const block = document.createElement('div');
    block.className = 'skills__category';

    const title = document.createElement('h3');
    title.textContent = category.name;

    const chips = document.createElement('div');
    chips.className = 'skills__chips';
    category.items.forEach((item) => {
      chips.appendChild(createTechChip(item));
    });

    block.append(title, chips);
    categories.appendChild(block);
  });

  inner.append(intro, categories);
  section.appendChild(inner);
  container.replaceChildren(section);
}
