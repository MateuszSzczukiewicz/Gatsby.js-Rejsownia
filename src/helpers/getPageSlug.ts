import slugify from 'slugify';

export const getPageSlug = (tag: string): string => `/rejsy/${slugify(tag.toLowerCase())}`;
