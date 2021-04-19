import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'

import { Certificate } from '../ViewLayer/Screens/Certificate'
import { CertificateStyledString as certificateStyles } from '../ViewLayer/Screens/CertificateStyle'

const SCREENS = {
  Certificate,
}

/**
 * @description Function to print React component as pdf with browser native API
 * @Link https://stackoverflow.com/questions/43567329/making-an-html-string-from-a-react-component-in-background-how-to-use-the-strin
 * @link https://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
 * @cli to compile less to css yunazon-learn-browser % lessc /Users/rcheskidov/dev/yunazon-learn-browser/src/ViewLayer/Screens/Certificate.less /Users/rcheskidov/dev/yunazon-learn-browser/src/ViewLayer/Screens/Certificate.css
 */
export const getCertificateHtml: Function = (data: any): string => {
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

  const certificateHtml =
    `<html><head><title>${title}</title>` +
    // '<link rel="stylesheet" href="/stylesheets/certificateStyles.css">' +
    `<style>${certificateStyles}</style></head>` +
    `<body>${divContents.outerHTML}</body ></html >`

  console.info('getCertificateHtml [38]', { certificateHtml })
  return certificateHtml
}
