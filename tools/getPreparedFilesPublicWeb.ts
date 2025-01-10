import { join } from 'path'

import { consoler } from '@yourails_common'
import { getFilesListInDir } from '@yourails_common'
import { getGivenPermission } from '@yourails_common'
import { getIteratedAndMinifiedFiles } from './getIteratedAndMinifiedFiles'

/**
 * @run_file yarn minify
 */

const getPreparedFilesPublicWeb = async (buildDir: string): Promise<void> => {
  /** @description Get a list of js files in /js directory */
  const inputDir = `${buildDir}/js`
  const extname = '.js'
  const jsFiles = await getFilesListInDir(inputDir, extname)

  /** @description Get, iterate and minify files */
  const minifiedFilesList = await getIteratedAndMinifiedFiles(buildDir, jsFiles)
  console.log('\n')
  minifiedFilesList.forEach((file: string) =>
    consoler('getPreparedFilesPublicWeb:', `Minified and compressed code written to ${file} yes`)
  )

  /** @description Give permission to the build directories */
  await getGivenPermission(buildDir)
}

/**
 * @description Here the file is being run directly
 * @run ts-node tools/getPreparedFilesPublicWeb.ts
 */
if (require.main === module) {
  ;(async () => {
    const buildDir = join(__dirname, '..', '/web-build/dist') // `${__dirname}/web-build` // '/Users/admin/Dev/yourails-sep-web-native/web-build'
    getPreparedFilesPublicWeb(buildDir)
  })()
}
