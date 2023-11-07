/**
 * @description Function to return string slug with Cyrillic support
 * @param str
 * @returns
 */
export const getSlug: Function = (str: string): string => {
  return str
    .split(' ')
    .join('-')
    .replace(/[^0-9A-Za-z_\-\u0400-\u04FF]/gi, '')
}
