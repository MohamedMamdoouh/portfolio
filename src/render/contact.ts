import { profile } from '../data/profile';
import { createSocialLinks } from './shared';
import { uiIcon } from '../lib/icons';

export function renderContact(container: HTMLElement): void {
  const [emailUser, emailDomain] = profile.email.split('@');

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

  const emailGroup = document.createElement('div');
  emailGroup.className = 'contact__email-group';

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
  copyButton.setAttribute('aria-label', 'Copy email address');
  copyButton.append(
    uiIcon('copy', 14, 'copy-icon'),
    uiIcon('check', 14, 'check-icon'),
    Object.assign(document.createElement('span'), {
      id: 'copy-email-label',
      className: 'contact__copy-label',
      textContent: 'Copy',
    }),
  );

  const feedback = document.createElement('span');
  feedback.id = 'copy-feedback';
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  feedback.className = 'visually-hidden';

  emailGroup.append(email, copyButton, feedback);

  const social = createSocialLinks('contact__social');
  bar.append(label, emailGroup, social);
  inner.appendChild(bar);
  section.appendChild(inner);
  container.replaceChildren(section);
}
