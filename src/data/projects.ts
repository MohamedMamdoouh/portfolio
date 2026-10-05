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
      'Full-stack lost-and-found platform that connects people who lost items with finders through moderated listings, structured ownership claims, and in-app chat.',
    problem:
      'People who lose items and those who find them need a trusted place to list items, verify ownership, and coordinate returns with moderation and messaging.',
    highlights: [
      {
        label: 'API reliability',
        detail:
          'Centralized exception handling, correlation IDs, validation, rate limiting, HybridCache, structured logging, and dependency health checks.',
      },
      {
        label: 'Auth',
        detail:
          'Phone/email OTP registration, password authentication, short-lived JWT access tokens, and HTTP-only refresh cookies for session persistence.',
      },
      {
        label: 'Frontend',
        detail:
          'Responsive Arabic RTL interfaces with reactive forms, EXIF metadata stripping, and client-side WebP image processing before storage uploads.',
      },
      {
        label: 'Realtime',
        detail:
          'SignalR chat with REST fallback and a transactional outbox for reliable SMS and email dispatch.',
      },
      {
        label: 'Background jobs',
        detail:
          'Workers for listing expiration, claim timeouts, storage cleanup, and scheduled maintenance.',
      },
      {
        label: 'Testing',
        detail:
          'Integration tests with xUnit and Testcontainers using isolated database instances, integrated into GitHub Actions CI pipelines.',
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
          'Role-based Angular standalone SPA using signals, lazy routes, guards, typed API contracts, and RTL, deployed with Docker, Supabase PostgreSQL, and Cloudflare R2.',
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
          'Clean Architecture backend with CQRS/MediatR, Result pattern, FluentValidation, and pipeline behaviors for validation, logging, transactions, and caching.',
      },
      {
        label: 'Auth',
        detail:
          'Secure JWT authentication with rotating refresh tokens, per-device sessions, reuse detection, RBAC, and custom policies.',
      },
      {
        label: 'Domain',
        detail:
          'Work orders, day scheduling, labor assignment, and invoicing with optimistic concurrency.',
      },
      {
        label: 'Testing',
        detail:
          'Unit and API integration tests with Testcontainers and separate GitHub Actions CI jobs.',
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
          '3-tier desktop solution using C# and WinForms, enforcing clean separation between UI, domain logic, and data access layers.',
      },
      {
        label: 'Data',
        detail:
          'SQL Server via ADO.NET and parameterized stored procedures to execute secure entity operations and rule-driven validation queries.',
      },
      {
        label: 'Workflows',
        detail:
          'Core licensing workflows, including a 3-stage exam system (scheduling, grading, retakes).',
      },
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/driver-vehicle-license-department-system',
    order: 4,
  },
];
