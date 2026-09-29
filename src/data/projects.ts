export interface Project {
  name: string;
  description: string;
  problem: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  order: number;
}

export const projects: Project[] = [
  {
    name: 'Amanah – Lost & Found Platform',
    description:
      'Full-stack production lost-and-found platform, handling report submissions, moderation queues, ownership claims, and real-time chat.',
    problem:
      'Communities need a trusted way to report lost or found items, verify ownership safely, and coordinate returns with moderation and messaging.',
    highlights: [
      'API reliability with correlation IDs, centralized exception handling, field-level validation, rate limiting, HybridCache, structured logging, and PostgreSQL/R2 readiness checks',
      'Secure auth with phone/email OTP registration, password sign-in, short-lived JWTs, and httpOnly refresh cookies',
      'Angular UI with RTL/Arabic support, reactive forms, EXIF stripping, and client-side WebP processing before Cloudflare R2 upload',
      'Bidirectional SignalR chat with REST fallback and a transactional outbox for reliable SMS and email dispatch',
      'Background workers for listing expiration, claim timeouts, orphaned storage cleanup, and scheduled maintenance',
      'Integration tests with xUnit and Testcontainers on isolated PostgreSQL instances in GitHub Actions CI',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/amanah-platform',
    liveUrl: 'https://amanah-egh5.onrender.com/',
    order: 1,
  },
  {
    name: 'Shora – Full-Stack Consulting & Booking Platform',
    description:
      'Full-stack production booking platform for one-to-one consulting sessions with availability management, manual payment verification, client bookings, and admin operations.',
    problem:
      'Consultants need a reliable way to publish availability, take bookings, and verify payments manually while giving clients a smooth booking experience and admins full operational control.',
    highlights: [
      'Clean Architecture with .NET API, EF Core/PostgreSQL, and Angular standalone SPA in a single Docker image',
      'JWT access tokens with rotating httpOnly refresh tokens, row locking, reuse detection, and secure session restoration',
      'Slot holds, concurrency control, expiry jobs, and manual payment workflows with receipt verification and refunds',
      'Transactional email outbox, private Cloudflare R2 storage, background workers, rate limiting, caching, and Problem Details',
      'xUnit integration tests with Testcontainers PostgreSQL and automated CI workflows',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/shora-consulting-platform',
    liveUrl: 'https://shora-asde.onrender.com/',
    order: 2,
  },
  {
    name: 'MechanicShop – Workshop Operations API',
    description:
      'Backend REST API for a mechanic shop covering work orders, day scheduling, labor assignment, customer and vehicle records, and invoicing.',
    problem:
      'Mechanic shops need a structured backend to manage work orders, scheduling, customers, and invoicing with secure, role-based access.',
    highlights: [
      'Clean Architecture with CQRS/MediatR, Result Pattern, FluentValidation, and pipeline behaviors for validation, logging, transactions, and caching',
      'Rich aggregates for work orders, shop-day scheduling, labor assignment, repair tasks, and invoicing',
      'JWT auth with rotating refresh tokens, per-device sessions, RBAC, and custom authorization for assigned mechanics',
      'Optimistic concurrency, Problem Details, output caching, rate limiting, and SQL Server application locks',
      'Unit and integration tests with Testcontainers and separate GitHub Actions CI jobs',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/MechanicShop',
    order: 3,
  },
  {
    name: 'DVLD – Driver & Vehicle License Department System',
    description:
      'Desktop application for managing driver licenses, license applications, driving tests, and vehicle-related records.',
    problem:
      'License departments need structured workflows for applications, tests, and records with role-based access and audit-friendly processes.',
    highlights: [
      'Layered WinForms solution in .NET Framework separating UI, business logic, and data access',
      'SQL Server via ADO.NET and parameterized stored procedures for CRUD, lookups, and rule-driven validation',
      'Licensing domain modeling and rules administration enforced at application and exam stages',
      'License transactions, vision/written/street testing with retakes, and password-hashed user access',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/driver-vehicle-license-department-system',
    order: 4,
  },
];
