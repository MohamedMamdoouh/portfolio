import { withBase } from '../lib/paths';

export const profile = {
  name: 'Mohamed Mamdouh',
  positioning:
    'Software Engineer focused on building full-stack web applications with .NET and Angular.',
  location: 'Egypt',
  email: 'mohamedmamdouh3550@gmail.com',
  cvPath: withBase('cv/mohamed-mamdouh-cv.pdf'),
  cvFileName: 'mohamed-mamdouh-cv.pdf',
  imagePath: withBase('images/profile/profile.png'),
  introduction:
    'Full-Stack .NET & Angular Developer with a solid foundation in building end-to-end web apps. Specialized in robust backend systems using ASP.NET Core and Clean Architecture, paired with modular Angular frontends. A proactive problem-solver ready to deliver clean, scalable, and testable code.',
} as const;

export const education = {
  degree: 'Bachelor of Engineering – Computer and Systems Engineering',
  institution: 'Zagazig University',
} as const;
