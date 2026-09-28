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
      'Monolith with Angular SPA served from API wwwroot',
      'Phone OTP signup and password sign-in',
      'JWT with httpOnly refresh cookies',
      'Report submission flows and moderation queues',
      'Ownership claims workflow',
      'Cloudflare R2 for report photo storage',
      'EXIF stripping and WebP conversion on upload',
      'Private images for ownership claims',
      'SignalR real-time chat',
      'Transactional SMS and email outbox',
      'Background workers for listing expiry and claim timeouts',
      'Orphaned Cloudflare R2 storage sweeps',
      'Rate limiting',
      'Integration tests with xUnit',
      'Testcontainers for database-backed tests',
      'CI/CD via GitHub Actions',
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
      'Clean Architecture on ASP.NET Core and Angular',
      'JWT login with refresh-token rotation',
      'Email verification',
      'Role-based authorization',
      'Booking pipeline with slot holds',
      'Manual payment receipt uploads and admin approval',
      'Cloudflare R2 for private receipt storage',
      'Brevo transactional email outbox',
      'Background workers for expired holds and booking lifecycle',
      'Rate limiting',
      'Dockerized deploys on Render',
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
      'Clean Architecture on ASP.NET Core',
      'CQRS with MediatR',
      'JWT authentication',
      'Refresh-token rotation and device sessions',
      'Role-based authorization',
      'Work-order workflows',
      'Shop-day scheduling',
      'Invoicing and repair tasks',
      'Labor assignment',
      'Unit and integration tests with xUnit',
      'Testcontainers',
      'CI/CD via GitHub Actions',
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
      '3-tier desktop architecture',
      'Windows Forms presentation layer',
      'ADO.NET data access with SQL Server',
      'Driver and person record management',
      'Staff user accounts',
      'License record management',
      'Role-based access control',
      'License issuance and renewal',
      'Replacement and detention workflows',
      'Driving test scheduling',
      'Appointments management',
      'Exam question bank',
    ],
    githubUrl: 'https://github.com/MohamedMamdoouh/driver-vehicle-license-department-system',
    order: 4,
  },
];
