export const getPrintedDocumentAs: Function = (): void => {
  // window.print()

  const isChrome = function () {
    // @ts-expect-error
    return Boolean(window?.chrome)
  }
  console.info('getPrintedDocumentAs [5]', { isChrome: isChrome() })
  if (isChrome()) {
    window.print()
    location.reload() /* Need to test if it is really necessary. It depends on the error in Chrome */
  } else {
    window.print()
    // window.close()
  }
}
