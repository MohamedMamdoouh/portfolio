// Joins a root-relative path with Astro's configured base path (handles either
// trailing-slash convention for import.meta.env.BASE_URL across dev/build).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
