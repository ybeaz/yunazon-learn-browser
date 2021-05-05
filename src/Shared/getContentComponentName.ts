/**
 * @description Function to return name of the main component for PresentAndSubscribe screen
 * @param componentType
 * @returns
 */
export const getContentComponentName: Function = (
  componentType: string
): string => {
  const output = {
    urlArbir: 'ReaderIframe',
    htmlPage: 'ReaderIframe',
    ytID: 'PlayerIframe',
  }

  return output[componentType] ? output[componentType] : null
}
