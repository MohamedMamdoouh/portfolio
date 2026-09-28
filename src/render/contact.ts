import { createSocialLinksGroup } from './shared';

export function renderContact(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'contact';

  const inner = document.createElement('div');
  inner.className = 'container contact__inner';

  const bar = document.createElement('div');
  bar.className = 'contact__bar';

  const label = document.createElement('h2');
  label.className = 'contact__label';
  label.textContent = 'Contact';

  const actions = document.createElement('div');
  actions.className = 'contact__actions';
  actions.appendChild(createSocialLinksGroup('contact__social', 20, { includeEmailCopy: true }));

  bar.append(label, actions);
  inner.appendChild(bar);
  section.appendChild(inner);
  container.replaceChildren(section);
}
