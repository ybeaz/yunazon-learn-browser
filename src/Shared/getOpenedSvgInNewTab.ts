/**
 * @description Function to open img or svg element in a new tab of the browser
 * @param url
 */

export const getOpenedSvgInNewTab = (url: string) => {
  const win: any = open(url)
  // so the Garbage Collector can collect the blob
  win.onload = (event: any) => URL.revokeObjectURL(url)
}
