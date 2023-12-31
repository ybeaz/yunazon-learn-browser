import { join } from 'path'

import { consoler } from './consoler'
import { consolerError } from './consolerError'
import { getWrittenFile } from './getWrittenFile'
import { execSync } from 'child_process'
import { getDateString } from '../src/Shared/getDateString'

interface GetGitBuildDataType {
  (pathFull: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getGitBuildData
 * @run ts-node tools/getGitBuildData.ts
 * @import import { getGitBuildData } from './getGitBuildData'
 */

export const getGitBuildData: GetGitBuildDataType = async (
  pathFull,
  options
) => {
  try {
    const branchCurrent = await execSync(`git branch --show-current`)
      .toString()
      .trim()

    let getGitBuildDataRes = await execSync(
      `git log -1 --pretty=format:'{%n  "commit": "%H",%n  "author": {%n    "name": "%aN",%n    "email": "%aE"%n  },%n  "date": "%ad",%n  "message": "%f"%n}'`
    )
      .toString()
      .trim()

    const getGitBuildDataResObjM1: any = JSON.parse(
      getGitBuildDataRes
    ) as Object

    const date = getDateString({
      timestamp: new Date(getGitBuildDataResObjM1.date),
    })
    const year = new Date(getGitBuildDataResObjM1.date).getFullYear()

    const copyright = `© 2021-${year} Userto Inc.`

    const getGitBuildDataResObj = {
      ...getGitBuildDataResObjM1,
      branchCurrent,
      date,
      copyright,
    }

    getGitBuildDataRes = JSON.stringify(getGitBuildDataResObj)

    getGitBuildDataRes = `import { BuildDataType } from '../@types/BuildDataType'; export const buildData: BuildDataType = ${getGitBuildDataRes}`

    await getWrittenFile(pathFull, getGitBuildDataRes)

    if (options?.printRes) {
      consoler('getGitBuildData', 'getGitBuildDataRes', {
        getGitBuildDataRes,
        getGitBuildDataResObj,
      })
    }

    return getGitBuildDataRes
  } catch (error) {
    consolerError('getGitBuildData', error)
    return
  }
}
;(async () => {
  const pathFull = join(__dirname, '..', `/src/Constants/buildData.const.ts`)
  await getGitBuildData(pathFull, { printRes: true })
})()
