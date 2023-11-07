interface GetOpenedUrlInNewTabInterface {
  (href: string): void
}

/**
 * @description Function to open href in a new browser tag
 * @param href string
 * @link https://stackoverflow.com/a/47789449/4791116
 */
export const getOpenedUrlInNewTab: GetOpenedUrlInNewTabInterface = href => {
  const win = window.open(href, '_blank')
  win.focus()
}
