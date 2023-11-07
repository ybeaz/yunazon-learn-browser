import { jsPDF } from 'jspdf' // will automatically load the node version
// var fs = require('fs')
// const { createCanvas, loadImage } = require('canvas')
// import rasterizeHTML from 'rasterizeHTML'
// const canvas = createCanvas(200, 200)

// require('jsdom-global')()
// import { JSDOM } from 'jsdom'
// import DOMPurify from 'isomorphic-dompurify'

// const { window } = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)

// const { getComputedStyle } = window
// window.getComputedStyle = (elt, pseudoElt) => getComputedStyle(elt, pseudoElt)

// global.window = window

// global.navigator = {}
// global.btoa = () => {}

// declare global {
//   namespace NodeJS {
//     interface Global {
//       windows: {
//         document: any
//       }
//       navigator: any
//       html2pdf: any
//       btoa: any
//     }
//   }
// }

export const getHtml2PdfWithJsPdf: Function = html => {
  const doc = new jsPDF()

  // const domPurifyNext = DOMPurify.sanitize(html)
  console.info('getHtml2PdfWithJsPdf [68]', { html })
  doc.text(html, 10, 10)
  doc.save(html)
}

// delete global.window
// delete global.html2pdf
// delete global.navigator
// delete global.btoa

// const jsdom = require('jsdom')
// const { JSDOM } = jsdom
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
// const { window } = new JSDOM(`...`)
// const { document } = new JSDOM(`...`).window

// doc.html(domPurifyNext, {
//   callback: function (doc) {
//     doc.save(pdfFilePath)
//     // var data = doc.output()
//     // fs.writeFileSync(pdfFilePath, data, 'binary')
//   },
//   x: 10,
//   y: 10,
// })

// doc.html(html)
// var data = doc.output()

// const parent = document.createElement('div')
// document.body.innerHTML = html
// const { window } = new JSDOM(html)
//  const domPurify = DOMPurify(window)

// I stopped here
// "esModuleInterop": false
//

// const someEntity = rasterizeHTML.drawHTML(
//   'Some ' +
//     '<span style="color: green; font-size: 20px;">HTML</span>' +
//     ' with an image <img src="someimg.png">',
//   canvas
// )

// global.window = window
// global.window.document = document
// {
//   document: {
//     createElementNS: () => {
//       return {}
//     },
//   },
// }
// global.window
// global.navigator = {}
// global.html2pdf = {}
// global.btoa = () => {}
