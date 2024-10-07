import { nanoid } from 'nanoid'

/**
 * @description Funciton to add style element to html page dynamicly with css class rules
 * @example style.sheet.insertRule('.foo{color:red;}', 0);
 *          console.log(style.sheet.cssRules); // length is 1, rule added
 * @link https://stackoverflow.com/a/28930990/4791116
 */
export const getCreatedStyleElement = () => {
  // Create the <style> tag
  const styleElement = document.createElement('style')
  styleElement.id = `st-${nanoid()}`

  // WebKit hack
  styleElement.appendChild(document.createTextNode(''))

  if (typeof document !== 'undefined') {
    document.head.appendChild(styleElement)
  }

  return styleElement
}
