/**
 * @description Function to return random number between two numbers
 * @import import { getRandomNumBetween } from '../Shared/getRandomNumBetween'
 */
export const getRandomNumBetween = (min: number, max: number): number => {
  return Math.random() * (max - min + 1) + min
}
