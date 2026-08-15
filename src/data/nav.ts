export interface NavItem {
  label: string;
  href: string;
}

// Primary navigation — Home, Projects, About, Skills only, per spec.
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
];
