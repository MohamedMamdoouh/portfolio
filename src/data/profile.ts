import { withBase } from '../lib/paths';

export const profile = {
  name: 'Mohamed Mamdouh',
  title: 'Software Engineer',
  positioning:
    'Software Engineer focused on building full-stack web applications with .NET and Angular.',
  location: 'Egypt',
  email: 'mohamedmamdouh3550@gmail.com',
  cvPath: withBase('cv/mohamed-mamdouh-cv.pdf'),
  cvFileName: 'mohamed-mamdouh-cv.pdf',
  imagePath: withBase('images/profile/profile.png'),
  introduction:
    'I am a software engineer specializing in full-stack web development with ASP.NET Core and Angular. I focus on building clean, well-architected backend systems paired with modular, maintainable frontends, and I care about writing scalable, testable code.',
} as const;

export const education = {
  degree: 'Bachelor of Engineering - Computer and Systems Engineering',
  institution: 'Zagazig University',
  graduation: 'Graduated 2026',
} as const;
