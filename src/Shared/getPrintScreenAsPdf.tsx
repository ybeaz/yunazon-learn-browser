import { renderToString } from 'react-dom/server'

import { Certificate } from '../ViewLayer/Screens/Certificate'

/**
 * @description Function to print React component as pdf with browser native API
 * @Link https://stackoverflow.com/questions/43567329/making-an-html-string-from-a-react-component-in-background-how-to-use-the-strin
 * @link https://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
 */

const SCREENS = {
  Certificate,
}

export const getPrintScreenAsPdf: Function = (
  event: EventListener,
  data: any
): void => {
  const { screenType, userName } = data
  const ScreenToPrint = SCREENS[screenType]
  const screenToPrintProps = { userName }

  var divContents = renderToString(<ScreenToPrint {...screenToPrintProps} />)
  // document.getElementsByTagName('body')[0].innerHTML
  var printWindow = window.open('', '', 'height=400,width=800')
  printWindow.document.write('<html><head><title>DIV Contents</title>')
  printWindow.document.write('</head><body >')
  printWindow.document.write(divContents)
  printWindow.document.write('</body></html>')
  printWindow.document.close()
  printWindow.print()
}
