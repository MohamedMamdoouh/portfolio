import { withBase } from '../lib/paths';

export const profile = {
  name: 'Mohamed Mamdouh',
  positioning:
    'Software Engineer focused on building full-stack web applications with .NET and Angular.',
  location: 'Cairo, Egypt',
  email: 'mohamedmamdouh3550@gmail.com',
  cvPath: withBase('cv/mohamed-mamdouh-cv.pdf'),
  cvFileName: 'mohamed-mamdouh-cv.pdf',
  imagePath: withBase('images/profile/profile.png'),
  introduction:
    'Full-Stack .NET & Angular Developer focused on building scalable web applications with ASP.NET Core, Clean Architecture, and Angular. Skilled in writing clean, maintainable, and testable code.',
} as const;

export const education = {
  degree: 'Bachelor of Engineering in Computer and Systems Engineering',
  institution: 'Zagazig University',
  graduationYear: '2026',
} as const;
