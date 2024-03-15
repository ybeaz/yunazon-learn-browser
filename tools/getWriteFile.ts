import { promises as fs } from 'fs'
import { consoler } from './consoler'
import { consolerError } from './consolerError'

interface getWriteFileType {
  (pathFull: string, str: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getWriteFile
 * @import import { getWriteFile } from './getWriteFile'
 */

export const getWriteFile: getWriteFileType = async (
  pathFull,
  str,
  options
) => {
  try {
    await fs.writeFile(pathFull, str)

    if (options?.printRes) {
      consoler('getWriteFile', str)
    }

    return str
  } catch (error) {
    consolerError('getWriteFile', error)
    return
  }
}
