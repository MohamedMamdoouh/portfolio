export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'T-SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    items: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'LINQ',
      'ADO.NET',
      'ASP.NET Identity',
      'JWT',
      'Refresh Tokens',
      'HTTP-only Cookies',
      'Role-Based Authorization (RBAC)',
      'Dependency Injection',
      'FluentValidation',
      'MediatR (CQRS)',
      'SignalR',
      'Background Services',
      'Caching',
      'Middleware',
      'Logging',
    ],
  },
  {
    name: 'Frontend',
    items: [
      'Angular',
      'RxJS',
      'Signals',
      'Lazy Loading',
      'Routing',
      'Reactive Forms',
      'HTTP Interceptors',
      'Route Guards',
      'Dependency Injection',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    name: 'Databases & Storage',
    items: [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Cloudflare R2',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    name: 'Testing & DevOps',
    items: [
      'xUnit',
      'Testcontainers',
      'Docker',
      'GitHub Actions (CI/CD)',
      'Postman',
      'Swagger',
      'Git',
      'GitHub',
    ],
  },
  {
    name: 'Architecture & Concepts',
    items: [
      'SOLID Principles',
      'Design Patterns',
      'Clean Code',
      'Clean Architecture',
      '3-Tier Architecture',
      'Domain-Driven Design fundamentals',
      'Transactional Outbox Pattern',
      'RESTful API Design',
      'SDLC',
    ],
  },
];
