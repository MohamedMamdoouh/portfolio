import { withBase } from '../lib/paths';

export const profile = {
  name: 'Mohamed Mamdouh',
  positioning:
    'Software Engineer focused on building full-stack web applications with .NET and Angular.',
  email: 'mohamedmamdouh3550@gmail.com',
  cvPath: withBase('cv/mohamed-mamdouh-cv.pdf'),
  cvFileName: 'mohamed-mamdouh-cv.pdf',
  imagePath: withBase('images/profile/profile.png'),
  introduction:
    'Full-Stack .NET & Angular Developer experienced in building production web applications with ASP.NET Core, Angular, SQL. Strong in API design, secure authentication, Clean Architecture, testing, and CI/CD pipelines.',
} as const;

export const education = {
  degree: 'Bachelor of Engineering in Computer and Systems Engineering',
  institution: 'Zagazig University',
  graduationYear: '2026',
} as const;
