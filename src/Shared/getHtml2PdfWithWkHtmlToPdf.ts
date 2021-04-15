var fs = require('fs')
var { wkhtmltopdf } = require('wkhtmltopdf')

/**
 * @description DON'T WORK WITHOUT BINARY FILE. Function Html > Pdf.
 * @param pdfFileName
 * @param pdfFilePath
 * @param html
 */
export const getHtml2PdfWithWkHtmlToPdf: Function = (
  pdfFileName,
  pdfFilePath,
  html
) => {
  // // URL
  // wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
  //   .pipe(fs.createWriteStream(pdfFilePath));

  // HTML
  wkhtmltopdf(html).pipe(fs.createWriteStream(pdfFilePath))
}
