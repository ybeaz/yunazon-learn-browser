/**
 * @description Function to return name of the main component for AcademyPresent screen
 * @param componentType
 * @returns
 */
export const getContentComponentName = (componentType: string): string | null => {
  const output: Record<string, string> = {
    urlArbir: 'ReaderIframe',
    htmlPage: 'ReaderIframe',
    ytID: 'PlayerIframe',
  }

  return output[componentType] ? output[componentType] : null
}
