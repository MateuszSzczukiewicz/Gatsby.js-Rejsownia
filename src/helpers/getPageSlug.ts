import slugify from 'slugify';

export const getPageSlug = (tag: string): string => `${slugify(tag.toLowerCase())}`;
