const resetTimeouts = new WeakMap<HTMLButtonElement, ReturnType<typeof setTimeout>>();

function getFeedback(button: HTMLButtonElement): HTMLElement | null {
  const root = button.closest('[data-copy-email-root]');
  return root?.querySelector<HTMLElement>('.copy-email-feedback') ?? null;
}

export function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('.copy-email-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.email;
      if (!email) return;

      const feedback = getFeedback(button);

      let copied = false;
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        copied = false;
      }

      if (!copied) {
        if (feedback) {
          feedback.textContent = 'Unable to copy email address';
          feedback.hidden = false;
        }
        return;
      }

      const existingTimeout = resetTimeouts.get(button);
      if (existingTimeout !== undefined) {
        clearTimeout(existingTimeout);
      }

      button.classList.add('copied');
      if (feedback) {
        feedback.textContent = 'Email copied to clipboard';
        feedback.hidden = false;
      }

      const resetTimeout = setTimeout(() => {
        button.classList.remove('copied');
        if (feedback) {
          feedback.textContent = '';
          feedback.hidden = true;
        }
        resetTimeouts.delete(button);
      }, 2500);

      resetTimeouts.set(button, resetTimeout);
    });
  });
}
