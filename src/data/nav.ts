export interface NavItem {
  label: string;
  href: string;
}

// Primary navigation — About, Skills, Projects.
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];
