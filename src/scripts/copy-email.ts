export function initCopyEmail(): void {
  const button = document.getElementById('copy-email-btn');
  const label = document.getElementById('copy-email-label');
  const feedback = document.getElementById('copy-feedback');
  let resetTimeout: ReturnType<typeof setTimeout> | undefined;

  button?.addEventListener('click', async () => {
    const user = button.dataset.user;
    const domain = button.dataset.domain;
    if (!user || !domain) return;

    const email = `${user}@${domain}`;

    let copied = false;
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      copied = false;
    }

    if (!copied) {
      if (feedback) feedback.textContent = 'Unable to copy email address';
      return;
    }

    if (resetTimeout !== undefined) {
      clearTimeout(resetTimeout);
    }

    button.classList.add('copied');
    if (label) label.textContent = 'Copied!';
    if (feedback) feedback.textContent = 'Email address copied to clipboard';

    resetTimeout = setTimeout(() => {
      button.classList.remove('copied');
      if (label) label.textContent = 'Copy';
      resetTimeout = undefined;
    }, 2000);
  });
}
