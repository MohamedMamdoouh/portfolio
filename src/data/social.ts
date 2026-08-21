export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'facebook' | 'x' | 'youtube';
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/MohamedMamdoouh',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohamed-mamdouh-220806192/',
    icon: 'linkedin',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mohamedmamdouh2001',
    icon: 'facebook',
  },
  {
    name: 'X',
    url: 'https://x.com/ellamby33',
    icon: 'x',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@mohamedmamdouh33',
    icon: 'youtube',
  },
];
