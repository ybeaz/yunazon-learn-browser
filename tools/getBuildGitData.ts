import { join } from 'path'

import { consoler } from './consoler'
import { consolerError } from './consolerError'
import { getWriteFile } from './getWriteFile'
import { execSync } from 'child_process'
import { getDateString } from '../src/Shared/getDateString'

interface GetBuildGitDataType {
  (pathFull: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getBuildGitData
 * @run ts-node tools/getBuildGitData.ts
 * @import import { getBuildGitData } from './getBuildGitData'
 */

export const getBuildGitData: GetBuildGitDataType = async (
  pathFull,
  options
) => {
  try {
    const branchCurrent = await execSync(`git branch --show-current`)
      .toString()
      .trim()

    let getBuildGitDataRes = await execSync(
      `git log -1 --pretty=format:'{%n  "commit": "%H",%n  "author": {%n    "name": "%aN",%n    "email": "%aE"%n  },%n  "date": "%ad",%n  "message": "%f"%n}'`
    )
      .toString()
      .trim()

    const getBuildGitDataResObjM1: any = JSON.parse(
      getBuildGitDataRes
    ) as Object

    const date = getDateString({
      timestamp: new Date(getBuildGitDataResObjM1.date),
    })
    const year = new Date(getBuildGitDataResObjM1.date).getFullYear()

    const copyright = `© 2021-${year} Userto Inc.`

    const getBuildGitDataResObj = {
      ...getBuildGitDataResObjM1,
      branchCurrent,
      date,
      copyright,
    }

    getBuildGitDataRes = JSON.stringify(getBuildGitDataResObj)

    getBuildGitDataRes = `import { BuildDataType } from '../@types/BuildDataType'; export const buildData: BuildDataType = ${getBuildGitDataRes}`

    await getWriteFile(pathFull, getBuildGitDataRes)

    if (options?.printRes) {
      consoler('getBuildGitData', {
        getBuildGitDataRes,
        getBuildGitDataResObj,
      })
    }

    return getBuildGitDataRes
  } catch (error) {
    consolerError('getBuildGitData', error)
    return
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const pathFull = join(__dirname, '..', `/src/Constants/buildData.const.ts`)
    await getBuildGitData(pathFull, { printRes: true })
  })()
}
