import { promises as fs } from 'fs'
import { join } from 'path'

import { consoler } from './consoler'
import { consolerError } from './consolerError'
import { getBuildGitData } from './getBuildGitData'
import { getCreatedFolder } from './getCreatedFolder'
import { getCopiedFileDir } from './getCopiedFileDir'

export type GetBuildAddedOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

interface GetBuildAddedType {
  (options?: GetBuildAddedOptionsType): void
}

const optionsDefault: Required<GetBuildAddedOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getBuildAdded
 * @run ts-node tools/getBuildAdded.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register tools/getBuildAdded.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getBuildAdded, GetBuildAddedParamsType } from './tools/getBuildAdded'
 */
export const getBuildAdded: GetBuildAddedType = async (
  optionsIn: GetBuildAddedOptionsType = optionsDefault
) => {
  const options: Required<GetBuildAddedOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  try {
    const pathFull = join(__dirname, '..', `/src/Constants/buildData.const.ts`)
    await getBuildGitData(pathFull, { printRes: true })
    consoler('getGitBuildData:', 'yes')

    const pathToCssFolder = 'web-build/css'
    await getCreatedFolder(pathToCssFolder)
    consoler('getCreatedFolder for css:', 'yes')

    const fileNameCss: string = 'styles-loading-init.css'
    const sourceCss: string = `deployment/${fileNameCss}`
    const destinationCss: string = `${pathToCssFolder}/${fileNameCss}`
    const overwriteCss: boolean = true
    await getCopiedFileDir(sourceCss, destinationCss, overwriteCss)
    consoler('getCopiedFileDir loading css file:', 'yes')

    const sourceIndexHtml: string = `deployment/index-academy.yourails.html`
    const destinationIndexHtml: string = `web-build/index.html`
    const overwriteIndexHtml: boolean = true
    await getCopiedFileDir(
      sourceIndexHtml,
      destinationIndexHtml,
      overwriteIndexHtml
    )
    consoler('getCopiedFileDir index.html file:', 'yes')
  } catch (error: any) {
    consolerError('getBuildAdded', { parentFunction, ...error })
  } finally {
    if (printRes) {
      consoler('getBuildAdded [64]', {
        parentFunction,
      })
    }
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    await getBuildAdded({ printRes: false })
  })()
}
