import type { SimpleIcon } from 'simple-icons';
import {
  siAngular,
  siBootstrap,
  siCss3,
  siDocker,
  siDotnet,
  siFacebook,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLinkedin,
  siMongodb,
  siPostgresql,
  siPostman,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siX,
  siYoutube,
} from 'simple-icons';

export type UiIconName =
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'copy'
  | 'check'
  | 'chevron-down'
  | 'external-link'
  | 'download';

const uiIconPaths: Record<UiIconName, string> = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  'external-link':
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>',
  download: '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/>',
};

const brandIcons: Record<string, SimpleIcon> = {
  angular: siAngular,
  bootstrap: siBootstrap,
  css3: siCss3,
  docker: siDocker,
  dotnet: siDotnet,
  facebook: siFacebook,
  git: siGit,
  github: siGithub,
  githubactions: siGithubactions,
  html5: siHtml5,
  javascript: siJavascript,
  jsonwebtokens: siJsonwebtokens,
  linkedin: siLinkedin,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  postman: siPostman,
  swagger: siSwagger,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  x: siX,
  youtube: siYoutube,
};

export function brandIcon(slug: string, size = 20, className = ''): SVGSVGElement | null {
  const icon = brandIcons[slug];
  if (!icon) return null;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  if (className) svg.setAttribute('class', className);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', icon.path);
  path.setAttribute('fill', 'currentColor');
  svg.appendChild(path);

  return svg;
}

export function uiIcon(name: UiIconName, size = 20, className = ''): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  if (className) svg.setAttribute('class', className);
  svg.innerHTML = uiIconPaths[name];

  return svg;
}

export function logoIcon(size = 36, className = ''): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 40 40');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  if (className) svg.setAttribute('class', className);

  svg.innerHTML = `
    <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="none" stroke="var(--color-accent)" stroke-width="2"></rect>
    <path d="M11 27V13h3.1l5.4 8.4L24.9 13H28v14h-3.2v-9.1l-4.7 7.2h-1.4l-4.7-7.2V27H11Z" fill="var(--color-text)"></path>
  `;

  return svg;
}

export function decorativeIllustration(className = ''): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 400 400');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('class', `decorative-illustration${className ? ` ${className}` : ''}`);

  svg.innerHTML = `
    <circle cx="80" cy="90" r="4" fill="var(--color-accent)"></circle>
    <circle cx="200" cy="50" r="4" fill="var(--color-accent)"></circle>
    <circle cx="330" cy="120" r="4" fill="var(--color-accent)"></circle>
    <circle cx="60" cy="260" r="4" fill="var(--color-accent)"></circle>
    <circle cx="250" cy="330" r="4" fill="var(--color-accent)"></circle>
    <circle cx="360" cy="280" r="4" fill="var(--color-accent)"></circle>
    <circle cx="180" cy="200" r="5" fill="var(--color-accent)"></circle>
    <path d="M80 90 L180 200 M200 50 L180 200 M330 120 L180 200 M60 260 L180 200 M250 330 L180 200 M360 280 L180 200 M80 90 L200 50 M330 120 L200 50" stroke="var(--color-accent)" stroke-width="1" stroke-linecap="round"></path>
  `;

  return svg;
}
