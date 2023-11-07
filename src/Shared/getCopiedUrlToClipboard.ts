/**
 * @description Function to copy current URL to clipboard and to return it as well
 */
export const getCopiedUrlToClipboard: Function = (): string => {
  const dummy = document.createElement('input')
  const url = location.href
  document.body.appendChild(dummy)
  dummy.value = url
  dummy.select()
  document.execCommand('copy')
  document.body.removeChild(dummy)
  alert(`You copied to clipboard the link\n${url}`)
  return url
}
