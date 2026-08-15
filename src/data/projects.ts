// Centralized project data. Source of truth: mohamed_mamdouh_cv.pdf (confirmed by user).
// Do not add, remove, or reorder projects without explicit approval — the spec requires exactly 2.

export interface TechItem {
  name: string;
  /** simple-icons slug (without the "si" prefix), omitted when no accurate brand logo exists */
  iconSlug?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  status: string;
  technologies: TechItem[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'shora',
    name: 'Shora – Full-Stack Booking Platform',
    tagline: 'Full-stack booking platform for one-to-one consulting sessions',
    description:
      'Full-stack booking platform for one-to-one consulting sessions with availability management, manual payment verification, client bookings, and admin operations.',
    problem:
      'Consultants need a reliable way to publish availability, take bookings, and verify payments manually while giving clients a smooth booking experience and admins full operational control.',
    role: 'Full-stack developer — designed and built the backend, frontend, and infrastructure end to end.',
    status: 'Live in production',
    technologies: [
      { name: 'ASP.NET Core', iconSlug: 'dotnet' },
      { name: 'Angular', iconSlug: 'angular' },
      { name: 'PostgreSQL', iconSlug: 'postgresql' },
      { name: 'EF Core' },
      { name: 'JWT', iconSlug: 'jsonwebtokens' },
      { name: 'ASP.NET Identity' },
      { name: 'Azure Blob Storage' },
      { name: 'Docker', iconSlug: 'docker' },
      { name: 'xUnit' },
      { name: 'Testcontainers' },
      { name: 'GitHub Actions', iconSlug: 'githubactions' },
    ],
    highlights: [
      'Clean Architecture',
      'JWT + refresh-token rotation',
      'Booking & payment workflows',
      'Outbox + caching + rate limiting',
      'Dockerized CI/CD',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/shora-consulting-platform',
    liveUrl: 'https://mahmoudelbanna.up.railway.app/',
    order: 1,
  },
  {
    slug: 'mechanicshop',
    name: 'MechanicShop – Backend REST API',
    tagline: 'Backend system for managing mechanic shop operations',
    description:
      'Backend system for managing mechanic shop operations (work orders, scheduling, customers, invoicing).',
    problem:
      'Mechanic shops need a structured backend to manage work orders, scheduling, customers, and invoicing with secure, role-based access.',
    role: 'Backend developer — designed and built the REST API and its infrastructure.',
    status: 'GitHub project',
    technologies: [
      { name: 'ASP.NET Core', iconSlug: 'dotnet' },
      { name: 'EF Core' },
      { name: 'SQL Server' },
      { name: 'CQRS (MediatR)' },
      { name: 'JWT', iconSlug: 'jsonwebtokens' },
      { name: 'Docker', iconSlug: 'docker' },
      { name: 'xUnit' },
    ],
    highlights: [
      'Clean Architecture + CQRS',
      'JWT + role-based authorization',
      'Background services & caching',
      'xUnit + Testcontainers',
      'Dockerized deployment',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/MechanicShop',
    order: 2,
  },
];
