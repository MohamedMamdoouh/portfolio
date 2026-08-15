// Centralized personal/profile data. Source of truth: mohamed_mamdouh_cv.pdf

export const profile = {
  name: 'Mohamed Mamdouh',
  title: 'Software Engineer',
  positioning:
    'Junior Software Engineer focused on building full-stack web applications with .NET and Angular.',
  location: 'Egypt',
  email: 'mohamedmamdouh3550@gmail.com',
  cvPath: '/cv/mohamed-mamdouh-cv.pdf',
  cvFileName: 'mohamed-mamdouh-cv.pdf',
  introduction:
    'I am a junior software engineer specializing in full-stack web development with ASP.NET Core and Angular. I focus on building clean, well-architected backend systems paired with modular, maintainable frontends, and I care about writing scalable, testable code.',
} as const;

export const education = {
  degree: 'Bachelor of Engineering – Computer and Systems Engineering',
  institution: 'Zagazig University',
  graduation: 'Graduated 2026',
} as const;
