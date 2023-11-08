import fs from 'fs'
import zlib from 'zlib'
import uglify from 'uglify-js'

/**
 * @description Function to minify and write a file
 * @import import { getMinifiedBundle } from './getMinifiedBundle'
 */
export const getMinifiedBundle = (
  inputFileIn: string,
  outputFileIn: string
) => {
  // read the input file contents
  const inputCode = fs.readFileSync(inputFileIn, 'utf8')

  // minify the code using UglifyJS
  const result = uglify.minify(inputCode)
  fs.writeFileSync(outputFileIn, result.code)

  // compress the minified code using gzip
  zlib.gzip(result.code, (error: any, buffer: any) => {
    if (error) {
      console.error(error)
    } else {
      // write the compressed code to the output file
      fs.writeFileSync(`${outputFileIn}.gz`, buffer)
    }
  })
}
