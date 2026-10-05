export interface ProjectHighlight {
  label: string;
  detail: string;
}

export interface Project {
  name: string;
  description: string;
  problem: string;
  highlights: ProjectHighlight[];
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
      {
        label: 'Reliability',
        detail:
          'Correlation IDs, centralized exception handling, field-level validation, rate limiting, HybridCache, structured logging, and PostgreSQL/R2 readiness checks.',
      },
      {
        label: 'Auth',
        detail:
          'Phone/email OTP registration, password sign-in, short-lived JWTs, and httpOnly refresh cookies.',
      },
      {
        label: 'Frontend',
        detail:
          'Angular UI with RTL/Arabic support, reactive forms, EXIF stripping, and client-side WebP processing before Cloudflare R2 upload.',
      },
      {
        label: 'Realtime',
        detail:
          'Bidirectional SignalR chat with REST fallback and a transactional outbox for reliable SMS and email dispatch.',
      },
      {
        label: 'Background jobs',
        detail:
          'Workers for listing expiration, claim timeouts, orphaned storage cleanup, and scheduled maintenance.',
      },
      {
        label: 'Testing',
        detail:
          'xUnit and Testcontainers integration tests on isolated PostgreSQL instances in GitHub Actions CI.',
      },
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/amanah-platform',
    liveUrl: 'https://amanah-egh5.onrender.com/',
    order: 1,
  },
  {
    name: 'Shora – Consulting & Booking Platform',
    description:
      'Full-stack production booking platform for one-to-one consulting sessions with availability management, manual payment verification, client bookings, and admin operations.',
    problem:
      'Consultants need a reliable way to publish availability, take bookings, and verify payments manually while giving clients a smooth booking experience and admins full operational control.',
    highlights: [
      {
        label: 'Concurrency',
        detail:
          'Prevented double-booking with PostgreSQL row locks, transactions, and partial unique indexes; modeled booking/payment lifecycles with state machines and audit trails.',
      },
      {
        label: 'Payments',
        detail:
          'Manual payment verification for Vodafone Cash/InstaPay with receipt validation, SHA-256 duplicate detection, and secure presigned URLs.',
      },
      {
        label: 'Scheduling',
        detail:
          'Recurring availability, blocked dates, booking-hold limits, payment deadlines, and cancellation rules.',
      },
      {
        label: 'Frontend',
        detail:
          'Role-based Angular standalone SPA with signals, lazy routes, guards, typed API contracts, and RTL; deployed with Docker, Supabase PostgreSQL, and Cloudflare R2.',
      },
      {
        label: 'Operations',
        detail:
          'Job monitoring, admin alerts, API error codes, and earnings reporting for gross, refunded, and net revenue.',
      },
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
      {
        label: 'Architecture',
        detail:
          'Clean Architecture with CQRS/MediatR, Result Pattern, FluentValidation, and pipeline behaviors for validation, logging, transactions, and caching.',
      },
      {
        label: 'Domain',
        detail:
          'Rich aggregates for work orders, shop-day scheduling, labor assignment, repair tasks, and invoicing.',
      },
      {
        label: 'Auth',
        detail:
          'JWT auth with rotating refresh tokens, per-device sessions, RBAC, and custom authorization for assigned mechanics.',
      },
      {
        label: 'Concurrency',
        detail:
          'Optimistic concurrency, Problem Details, output caching, rate limiting, and SQL Server application locks.',
      },
      {
        label: 'Testing',
        detail:
          'Unit and integration tests with Testcontainers and separate GitHub Actions CI jobs.',
      },
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
      {
        label: 'Architecture',
        detail:
          'Layered WinForms solution in .NET Framework separating UI, business logic, and data access.',
      },
      {
        label: 'Data',
        detail:
          'SQL Server via ADO.NET and parameterized stored procedures for CRUD, lookups, and rule-driven validation.',
      },
      {
        label: 'Domain',
        detail:
          'Licensing domain modeling and rules administration enforced at application and exam stages.',
      },
      {
        label: 'Workflows',
        detail:
          'License transactions, vision/written/street testing with retakes, and password-hashed user access.',
      },
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/driver-vehicle-license-department-system',
    order: 4,
  },
];
