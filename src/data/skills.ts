// Skills data, curated from the CV (not every listed technology is duplicated as a logo chip).

import type { TechItem } from './projects';

export interface SkillCategory {
  name: string;
  items: TechItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    items: [
      { name: 'C#' },
      { name: 'ASP.NET Core Web API', iconSlug: 'dotnet' },
      { name: 'Entity Framework Core' },
      { name: 'REST APIs' },
      { name: 'ASP.NET Identity' },
      { name: 'JWT Authentication', iconSlug: 'jsonwebtokens' },
      { name: 'Role-Based Authorization' },
      { name: 'Middleware' },
      { name: 'Clean Architecture' },
      { name: 'DDD' },
      { name: 'CQRS' },
      { name: 'MediatR' },
      { name: 'SignalR' },
      { name: 'FluentValidation' },
      { name: 'Background Services' },
      { name: 'Caching' },
      { name: 'Dependency Injection' },
      { name: 'Unit & Integration Testing' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'Angular', iconSlug: 'angular' },
      { name: 'TypeScript', iconSlug: 'typescript' },
      { name: 'JavaScript', iconSlug: 'javascript' },
      { name: 'HTML', iconSlug: 'html5' },
      { name: 'CSS', iconSlug: 'css3' },
      { name: 'Bootstrap', iconSlug: 'bootstrap' },
      { name: 'Tailwind CSS', iconSlug: 'tailwindcss' },
    ],
  },
  {
    name: 'Database',
    items: [
      { name: 'SQL' },
      { name: 'T-SQL' },
      { name: 'ADO.NET' },
      { name: 'MongoDB', iconSlug: 'mongodb' },
      { name: 'Database Design' },
      { name: 'Query Optimization' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git', iconSlug: 'git' },
      { name: 'GitHub', iconSlug: 'github' },
      { name: 'Docker', iconSlug: 'docker' },
      { name: 'Postman', iconSlug: 'postman' },
      { name: 'Swagger', iconSlug: 'swagger' },
      { name: 'CI/CD basics' },
    ],
  },
  {
    name: 'Concepts',
    items: [
      { name: 'OOP' },
      { name: 'SOLID Principles' },
      { name: 'Design Patterns' },
      { name: 'Clean Code' },
      { name: 'Problem Solving' },
      { name: 'Agile' },
    ],
  },
];
