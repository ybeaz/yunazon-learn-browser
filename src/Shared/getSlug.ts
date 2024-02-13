/**
 * @description Function to return string slug with Cyrillic support
 * @import import { getSlug } from 'src/Shared/getSlug'
 */
export const getSlug: Function = (str: string): string => {
  return str
    .split(' ')
    .join('-')
    .replace(/[^0-9A-Za-z_\-\u0400-\u04FF]/gi, '')
}
