import slugify from 'slugify';

export const getPageSlug = (address: string): string => `/staze/${slugify(address.toLowerCase())}`;
