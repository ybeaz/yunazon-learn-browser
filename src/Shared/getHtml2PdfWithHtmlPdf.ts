var pdf = require('html-pdf')

export const getHtml2PdfWithHtmlPdf: Function = (
  html: string,
  callback: Function
): void => {
  const optionsPdfCreate = {
    format: 'Letter',
    // phantomPath: './node_modules/phantomjs/bin/phantomjs',
    phantomPath: './node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs',
  }

  pdf.create(html, optionsPdfCreate)
  //   .toFile(pdfFilePath, (err, res) => {
  //   if (err) {
  //     return console.log('email.service [78]', { err })
  //   } else {
  //     callback()
  //     console.log('email.service [78]', { res })
  //   }
  // })
}
