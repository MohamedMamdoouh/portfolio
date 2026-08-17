import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { createTechChip } from './shared';
import { uiIcon } from '../lib/icons';

function renderProjectFeature(project: Project, index: number): HTMLElement {
  const article = document.createElement('article');
  article.className = 'project';

  const body = document.createElement('div');
  body.className = 'project__body';

  const indexLabel = document.createElement('span');
  indexLabel.className = 'project__index';
  indexLabel.setAttribute('aria-hidden', 'true');
  indexLabel.textContent = String(index).padStart(2, '0');

  const title = document.createElement('h3');
  title.textContent = project.name;

  const tagline = document.createElement('p');
  tagline.className = 'project__tagline';
  tagline.textContent = project.tagline;

  const description = document.createElement('p');
  description.textContent = project.description;

  const meta = document.createElement('dl');
  meta.className = 'project__meta';

  const problemDiv = document.createElement('div');
  const problemDt = document.createElement('dt');
  problemDt.textContent = 'Problem it solves';
  const problemDd = document.createElement('dd');
  problemDd.textContent = project.problem;
  problemDiv.append(problemDt, problemDd);

  const roleDiv = document.createElement('div');
  const roleDt = document.createElement('dt');
  roleDt.textContent = 'Role';
  const roleDd = document.createElement('dd');
  roleDd.textContent = project.role;
  roleDiv.append(roleDt, roleDd);

  meta.append(problemDiv, roleDiv);

  const highlights = document.createElement('ul');
  highlights.className = 'project__highlights';
  project.highlights.forEach((highlight) => {
    const li = document.createElement('li');
    li.textContent = highlight;
    highlights.appendChild(li);
  });

  const techGrid = document.createElement('div');
  techGrid.className = 'project__tech-grid';
  project.technologies.forEach((tech) => {
    techGrid.appendChild(createTechChip(tech));
  });

  const actions = document.createElement('div');
  actions.className = 'project__actions';

  if (project.liveUrl) {
    const liveLink = document.createElement('a');
    liveLink.href = project.liveUrl;
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';
    liveLink.className = 'btn btn-primary';
    liveLink.append('Live Demo', uiIcon('external-link', 16));

    const githubLink = document.createElement('a');
    githubLink.href = project.githubUrl;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.className = 'btn btn-secondary';
    githubLink.textContent = 'GitHub';

    actions.append(liveLink, githubLink);
  } else {
    const githubLink = document.createElement('a');
    githubLink.href = project.githubUrl;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.className = 'btn btn-primary';
    githubLink.textContent = 'GitHub';
    actions.appendChild(githubLink);
  }

  body.append(indexLabel, title, tagline, description, meta, highlights, techGrid, actions);
  article.appendChild(body);

  return article;
}

export function renderProjects(container: HTMLElement): void {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'projects';

  const inner = document.createElement('div');
  inner.className = 'container';

  const intro = document.createElement('div');
  intro.className = 'section-intro';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'Projects';

  const heading = document.createElement('h2');
  heading.textContent = 'Selected Work';

  const summary = document.createElement('p');
  summary.className = 'text-muted';
  summary.textContent =
    'A closer look at two full-stack systems I designed and built end-to-end — from clean, well-tested backend architecture with ASP.NET Core to the Angular interfaces on top of them.';

  intro.append(eyebrow, heading, summary);

  const orderedProjects = [...projects].sort((a, b) => a.order - b.order);
  orderedProjects.forEach((project, i) => {
    inner.appendChild(renderProjectFeature(project, i + 1));
  });

  inner.prepend(intro);
  section.appendChild(inner);
  container.replaceChildren(section);
}
