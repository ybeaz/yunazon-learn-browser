/**
 * @description Function to return url to open from svg element
 * @param svg
 * @returns
 */

export const getSvgUrl = svg => {
  const as_text = new XMLSerializer().serializeToString(svg)
  // store in a Blob
  const blob = new Blob([as_text], { type: 'image/svg+xml' })
  // create an URI pointing to that blob
  const url = URL.createObjectURL(blob)
  return url
}

// Testing and debugging
// const svg = document.querySelector('.Header__search_icon_test')

// const getOpenedSvgInNewTab = url => {
//   const win = open(url)
//   // so the Garbage Collector can collect the blob
//   win.onload = evt => URL.revokeObjectURL(url)
// }

// const url = getSvgUrl(svg)
// getOpenedSvgInNewTab(url)
