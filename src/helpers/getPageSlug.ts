import slugify from 'slugify';

export const getPageSlug = (address: string): string => `/rejsy/${slugify(address.toLowerCase())}`;
