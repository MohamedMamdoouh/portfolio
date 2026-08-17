import type { TechItem } from '../data/projects';
import { profile } from '../data/profile';
import { socialLinks } from '../data/social';
import { brandIcon, uiIcon } from '../lib/icons';

export function createTechChip(item: TechItem): HTMLSpanElement {
  const chip = document.createElement('span');
  chip.className = 'tech-chip';

  if (item.iconSlug) {
    const icon = brandIcon(item.iconSlug, 16);
    if (icon) chip.appendChild(icon);
  }

  const label = document.createElement('span');
  label.textContent = item.name;
  chip.appendChild(label);

  return chip;
}

export function createCVButton(variant: 'primary' | 'secondary' = 'secondary'): HTMLAnchorElement {
  const link = document.createElement('a');
  link.href = profile.cvPath;
  link.download = profile.cvFileName;
  link.className = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`;
  link.appendChild(uiIcon('download', 18));
  const label = document.createElement('span');
  label.textContent = 'Download CV';
  link.appendChild(label);
  return link;
}

export function createSocialLinks(className = '', iconSize = 20): HTMLUListElement {
  const list = document.createElement('ul');
  list.className = `social-links${className ? ` ${className}` : ''}`;

  for (const link of socialLinks) {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.setAttribute('aria-label', link.name);
    anchor.className = 'social-link';

    const icon = brandIcon(link.icon, iconSize);
    if (icon) anchor.appendChild(icon);

    item.appendChild(anchor);
    list.appendChild(item);
  }

  return list;
}

export function createThemeToggle(): HTMLButtonElement {
  const button = document.createElement('button');
  button.id = 'theme-toggle';
  button.type = 'button';
  button.className = 'theme-toggle';
  button.setAttribute('aria-label', 'Toggle color theme');
  button.appendChild(uiIcon('sun', 20, 'theme-toggle__icon theme-toggle__icon--sun'));
  button.appendChild(uiIcon('moon', 20, 'theme-toggle__icon theme-toggle__icon--moon'));
  return button;
}
