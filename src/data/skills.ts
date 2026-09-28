export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    items: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'REST APIs',
      'ASP.NET Identity',
      'JWT Authentication',
      'Role-Based Authorization',
      'Middleware',
      'Clean Architecture',
      'DDD',
      'CQRS',
      'MediatR',
      'SignalR',
      'FluentValidation',
      'Background Services',
      'Caching',
      'Dependency Injection',
      'Unit & Integration Testing',
    ],
  },
  {
    name: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    name: 'Database',
    items: ['SQL', 'T-SQL', 'ADO.NET', 'MongoDB', 'Database Design', 'Query Optimization'],
  },
  {
    name: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger', 'CI/CD basics'],
  },
  {
    name: 'Concepts',
    items: ['OOP', 'SOLID Principles', 'Design Patterns', 'Clean Code', 'Problem Solving', 'SDLC'],
  },
];
