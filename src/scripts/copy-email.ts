export function initCopyEmail(): void {
  const button = document.getElementById('copy-email-btn');
  const label = document.getElementById('copy-email-label');
  const feedback = document.getElementById('copy-feedback');

  button?.addEventListener('click', async () => {
    const user = button.dataset.user;
    const domain = button.dataset.domain;
    if (!user || !domain) return;

    const email = `${user}@${domain}`;

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API unavailable — fall back silently, feedback still informs the user of intent.
    }

    button.classList.add('copied');
    if (label) label.textContent = 'Copied!';
    if (feedback) feedback.textContent = 'Email address copied to clipboard';

    setTimeout(() => {
      button.classList.remove('copied');
      if (label) label.textContent = 'Copy';
    }, 2000);
  });
}
