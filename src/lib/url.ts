export function withBase(path = ''): string {
  const b = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  return b + path.replace(/^\//, '');
}
export function absUrl(path = '', site?: URL): string {
  return new URL(withBase(path), site ?? import.meta.env.SITE).toString();
}
export const SITE_NAME = 'Niche Books and Planners';
export const CONTACT_EMAIL = ''; // Kevin to supply; empty means a non-submitting note is shown instead of a mailto
