export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['C#', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'T-SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    items: [
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'ADO.NET',
      'ASP.NET Identity',
      'JWT & httpOnly Refresh Tokens',
      'Role-Based Authorization (RBAC)',
      'Dependency Injection',
      'FluentValidation',
      'MediatR (CQRS)',
      'SignalR',
      'Background Services',
      'Caching',
      'Middleware',
      'Observability',
    ],
  },
  {
    name: 'Frontend',
    items: [
      'Angular',
      'RxJS',
      'Lazy Loading',
      'Angular Routing',
      'Reactive Forms',
      'HTTP Interceptors',
      'Route Guards',
      'Angular Signals',
      'State Management',
      'Responsive Design',
      'RTL Support',
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
    name: 'Testing & Deployment',
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
      'Domain-Driven Design (DDD)',
      'Transactional Outbox Pattern',
      'RESTful API Design',
      'SDLC',
      'OOP',
      'Algorithms',
      'Data Structures',
    ],
  },
];
