const puppeteer = require('puppeteer')

// declare global {
//   interface Window {
//     requestFileSystem: any
//     webkitRequestFileSystem: any
//     PERSISTENT: any
//   }
// }

/**
 * @description Function to convert html to pdf with Chromium engine > puppeteer
 * @param {*} htmlContent
 * @returns
 */
export async function getHtml2PdfPuppeteer(htmlContent) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({})

  const errorHandler = error => {
    console.info('getHtml2PdfWithPuppeteer [24]', { error })
  }

  window.requestFileSystem =
    window.requestFileSystem || window.webkitRequestFileSystem
  window.requestFileSystem(
    window.PERSISTENT,
    5 * 1024 * 1024 /*5MB*/,
    pdf,
    errorHandler
  )

  await browser.close()

  return pdf
}

// await getHtml2PdfPuppeteer(divContents.outerHTML)
// Basic usage
// const pdfBuffed = await getHtml2PdfPuppeteer(certificateHtml)

// {
//   "compilerOptions": {
//     "module": "commonjs",
//     "declaration": true,
//     "noLib": false,
//     "lib": ["ESNext"],
//     "removeComments": true,
//     "emitDecoratorMetadata": true,
//     "experimentalDecorators": true,
//     "allowSyntheticDefaultImports": true,
//     "target": "ESNext",
//     "sourceMap": true,
//     "outDir": "./dist",
//     "baseUrl": "./",
//     "incremental": true,
//     "esModuleInterop": true
//   },
//   "allowJs": true,
//   "assets": ["src/**/*"],
//   "watchAssets": true,
//   "include": ["src/**/*"],
//   "exclude": ["node_modules", "dist"]
// }
