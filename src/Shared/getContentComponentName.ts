/**
 * @description Function to return name of the main component for PresentAndSubscribe screen
 * @param componentType
 * @returns
 */
export const getContentComponentName: Function = (
  componentType: string
): string => {
  const output = {
    htmlPage: 'Reader',
    ytID: 'Player',
  }

  return output[componentType] ? output[componentType] : null
}
