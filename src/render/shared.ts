import { profile } from '../data/profile';
import { socialLinks } from '../data/social';
import { brandIcon, uiIcon } from '../lib/icons';

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

function createSocialLinks(
  className = '',
  iconSize = 20,
  options?: { includeEmailCopy?: boolean },
): HTMLUListElement {
  const list = document.createElement('ul');
  list.className = `social-links${className ? ` ${className}` : ''}`;

  if (options?.includeEmailCopy) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'social-link social-link--copy-email copy-email-btn';
    button.dataset.email = profile.email;
    button.setAttribute('aria-label', 'Copy email address');
    button.appendChild(uiIcon('mail', iconSize, 'social-link__icon social-link__icon--mail'));
    button.appendChild(uiIcon('check', iconSize, 'social-link__icon social-link__icon--check'));
    item.appendChild(button);
    list.appendChild(item);
  }

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

export function createSocialLinksGroup(
  className = '',
  iconSize = 20,
  options?: { includeEmailCopy?: boolean },
): HTMLElement {
  const root = document.createElement('div');
  root.className = 'social-links-group';

  if (options?.includeEmailCopy) {
    root.dataset.copyEmailRoot = '';
  }

  root.appendChild(createSocialLinks(className, iconSize, options));

  if (options?.includeEmailCopy) {
    const feedback = document.createElement('span');
    feedback.className = 'copy-email-feedback';
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    feedback.hidden = true;
    root.appendChild(feedback);
  }

  return root;
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
