import { promises as fs } from 'fs'
import { consoler } from './consoler'
import { consolerError } from './consolerError'

interface getWriteFileType {
  (pathFull: string, str: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getWrittenFile
 * @import import { getWrittenFile } from './getWrittenFile'
 */

export const getWrittenFile: getWriteFileType = async (
  pathFull,
  str,
  options
) => {
  try {
    await fs.writeFile(pathFull, str)

    if (options?.printRes) {
      consoler('getWrittenFile', 'getWriteFileRes', str)
    }

    return str
  } catch (error) {
    consolerError('getWrittenFile', error)
    return
  }
}
