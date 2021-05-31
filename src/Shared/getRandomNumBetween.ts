/**
 * @description Function to return random number between two numbers
 * @param min
 * @param max
 * @returns
 */
export const getRandomNumBetween: Function = (
  min: number,
  max: number
): number => {
  return Math.random() * (max - min + 1) + min
}
