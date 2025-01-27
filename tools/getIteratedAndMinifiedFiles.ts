import {
  getMinifiedBundle,
  GetMinifiedBundleParamsType,
  GetMinifiedBundleOptionsType,
} from '@yourails_common'

interface GetIteratedAndMinifiedFilesType {
  (inputDir: string, jsFiles: string[]): Promise<string[]>
}

/**
 * @import import { getIteratedAndMinifiedFiles } from './getIteratedAndMinifiedFiles'
 */
export const getIteratedAndMinifiedFiles: GetIteratedAndMinifiedFilesType = async (
  inputDir,
  jsFiles
) => {
  let output: string[] = []
  jsFiles.forEach((file: string) => {
    const inputFileIn = `${inputDir}/js/${file}`
    const includesMainPrefix = file.includes('main')

    const outputFileIn = includesMainPrefix
      ? `${inputDir}/js/main.bundle.min.js`
      : `${inputDir}/js/bundle.min.js`

    const getMinifiedBundleParams: GetMinifiedBundleParamsType = {
      inputFileIn,
      outputFileIn,
    }
    const getMinifiedBundleOptions: GetMinifiedBundleOptionsType = {
      isUglifying: true,
      isWritingNotMinified: true,
    }

    getMinifiedBundle(getMinifiedBundleParams, getMinifiedBundleOptions)

    output.push(outputFileIn)
  })

  return output
}
