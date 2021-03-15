/**
 * @description Function to open img or svg element in a new tab of the browser
 * @param url
 */

const getOpenedSvgInNewTab = url => {
  const win = open(url)
  // so the Garbage Collector can collect the blob
  win.onload = evt => URL.revokeObjectURL(url)
}
