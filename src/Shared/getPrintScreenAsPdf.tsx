import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'

import { Certificate } from '../ViewLayer/Screens/Certificate'
import { CertificateStyledString } from '../ViewLayer/Screens/CertificateStyle'
/**
 * @description Function to print React component as pdf with browser native API
 * @Link https://stackoverflow.com/questions/43567329/making-an-html-string-from-a-react-component-in-background-how-to-use-the-strin
 * @link https://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
 * @cli to compile less to css yunazon-learn-browser % lessc /Users/rcheskidov/dev/yunazon-learn-browser/src/ViewLayer/Screens/Certificate.less /Users/rcheskidov/dev/yunazon-learn-browser/src/ViewLayer/Screens/Certificate.css
 */

const SCREENS = {
  Certificate,
}

export const getPrintScreenAsPdf: Function = (
  event: EventListener,
  data: any
): void => {
  const { screenType, ...screenToPrintProps } = data
  const { userName } = screenToPrintProps

  const ScreenToPrint = SCREENS[screenType]

  const userNameNoSpace = userName.split(' ').join('')
  const title = `${userNameNoSpace}Certificate`

  // Working but not used variants
  // var divContents = renderToString(<ScreenToPrint {...screenToPrintProps} />)
  // var divContents = document.getElementsByTagName('body')[0].innerHTML
  const divContents = document.createElement('div')
  ReactDOM.render(<ScreenToPrint {...screenToPrintProps} />, divContents)

  try {
    const printWindow = window.open('', '', 'height=400,width=800')
    printWindow.document.write(`<html><head><title>${title}</title>`)
    printWindow.document.write('<style>')
    printWindow.document.write(`${CertificateStyledString}`)
    printWindow.document.write('</style>')
    printWindow.document.write('</head><body >')
    printWindow.document.write(divContents.outerHTML)
    printWindow.document.write('</body></html>')
    printWindow.document.close()

    const curURL = window.location.href
    history.replaceState(history.state, '', '/')
    printWindow.print()
    history.replaceState(history.state, '', curURL)
  } catch (error) {
    console.info('getPrintScreenAsPdf [51]', error.name + ': ' + error.message)
  }

  // printWindow.print()
}
