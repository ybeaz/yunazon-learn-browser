/**
 * @description Function to return name of the main component for AcademyPresent screen
 * @param componentType
 * @returns
 */
export const getContentComponentName = (componentType: string): string => {
  const output: Record<string, string> = {
    urlArbir: 'ReaderIframe',
    htmlPage: 'ReaderIframe',
    ytID: 'PlayerYoutubeIframe',
  }

  return output[componentType] ? output[componentType] : 'PlayerYoutubeIframe'
}
