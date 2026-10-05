import { projects } from '../data/projects';
import type { Project } from '../data/projects';
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

  const description = document.createElement('p');
  description.className = 'project__description';
  description.textContent = project.description;

  const meta = document.createElement('dl');
  meta.className = 'project__meta';

  const problemDiv = document.createElement('div');
  const problemDt = document.createElement('dt');
  problemDt.textContent = 'Problem it solves';
  const problemDd = document.createElement('dd');
  problemDd.textContent = project.problem;
  problemDiv.append(problemDt, problemDd);

  meta.appendChild(problemDiv);

  const notes = document.createElement('div');
  notes.className = 'project__notes';

  const notesTitle = document.createElement('h4');
  notesTitle.className = 'project__notes-title';
  notesTitle.textContent = 'Engineering notes';

  const notesList = document.createElement('dl');
  notesList.className = 'project__notes-list';
  project.highlights.forEach(({ label, detail }) => {
    const row = document.createElement('div');
    row.className = 'project__note';

    const dt = document.createElement('dt');
    dt.textContent = label;

    const dd = document.createElement('dd');
    dd.textContent = detail;

    row.append(dt, dd);
    notesList.appendChild(row);
  });

  notes.append(notesTitle, notesList);

  const actions = document.createElement('div');
  actions.className = 'project__actions';

  if (project.liveUrl) {
    const liveLink = document.createElement('a');
    liveLink.href = project.liveUrl;
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';
    liveLink.className = 'btn btn-primary';
    liveLink.append('Live Production', uiIcon('external-link', 16));

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

  body.append(indexLabel, title, description, meta, notes, actions);
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

  intro.append(eyebrow, heading);

  const orderedProjects = [...projects].sort((a, b) => a.order - b.order);
  orderedProjects.forEach((project, i) => {
    inner.appendChild(renderProjectFeature(project, i + 1));
  });

  inner.prepend(intro);
  section.appendChild(inner);
  container.replaceChildren(section);
}
