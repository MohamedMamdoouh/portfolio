import { profile } from '../data/profile';
import { createSocialLinks } from './shared';
import { uiIcon } from '../lib/icons';

export function renderContact(container: HTMLElement): void {
  const [emailUser, emailDomain] = profile.email.split('@');

  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'contact';

  const inner = document.createElement('div');
  inner.className = 'container';

  const intro = document.createElement('div');
  intro.className = 'section-intro';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'Contact';

  const heading = document.createElement('h2');
  heading.textContent = 'Get in Touch';

  intro.append(eyebrow, heading);

  const row = document.createElement('div');
  row.className = 'contact__row';

  const email = document.createElement('span');
  email.className = 'contact__email';
  email.dataset.emailUser = emailUser;
  email.dataset.emailDomain = emailDomain;

  const userSpan = document.createElement('span');
  userSpan.textContent = emailUser;

  const atSpan = document.createElement('span');
  atSpan.className = 'contact__at';
  atSpan.setAttribute('aria-hidden', 'true');

  const atHidden = document.createElement('span');
  atHidden.className = 'visually-hidden';
  atHidden.textContent = 'at';

  const domainSpan = document.createElement('span');
  domainSpan.textContent = emailDomain;

  email.append(userSpan, atSpan, atHidden, domainSpan);

  const copyButton = document.createElement('button');
  copyButton.id = 'copy-email-btn';
  copyButton.type = 'button';
  copyButton.className = 'btn btn-secondary contact__copy-btn';
  copyButton.dataset.user = emailUser;
  copyButton.dataset.domain = emailDomain;
  copyButton.append(
    uiIcon('copy', 14, 'copy-icon'),
    uiIcon('check', 14, 'check-icon'),
    Object.assign(document.createElement('span'), {
      id: 'copy-email-label',
      textContent: 'Copy Email',
    }),
  );

  const feedback = document.createElement('span');
  feedback.id = 'copy-feedback';
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  feedback.className = 'visually-hidden';

  row.append(email, copyButton, feedback);
  inner.append(intro, row, createSocialLinks());
  section.appendChild(inner);
  container.replaceChildren(section);
}
