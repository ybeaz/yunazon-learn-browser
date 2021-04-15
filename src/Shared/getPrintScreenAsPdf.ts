import { getCertificateHtml } from './getCertificateHtml'

/**
 * @description Function to print React component as pdf with browser native API
 * @Link https://stackoverflow.com/questions/43567329/making-an-html-string-from-a-react-component-in-background-how-to-use-the-strin
 * @link https://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
 * @cli to compile less to css yunazon-learn-browser % lessc /Users/rcheskidov/dev/yunazon-learn-browser/src/ViewLayer/Screens/Certificate.less /Users/rcheskidov/dev/yunazon-learn-browser/src/ViewLayer/Screens/Certificate.css
 */
export const getPrintScreenAsPdf: Function = (data: any): void => {
  const certificateHtml = getCertificateHtml(data)

  try {
    const printWindow = window.open('', '', 'height=400,width=800')
    printWindow.document.write(certificateHtml)
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
