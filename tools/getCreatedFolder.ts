import fs, { promises as promisesFs } from 'fs'
import { consoler } from './consoler'
import { consolerError } from './consolerError'

interface GetCreatedFolderType {
  (path: string, options?: { printRes: boolean }): Promise<any>
}

/**
 * @description Function to getCreatedFolder
 * @import import { getCreatedFolder } from './getCreatedFolder'
 */

export const getCreatedFolder: GetCreatedFolderType = async (path, options) => {
  try {
    if (fs.existsSync(path)) {
      return `${path} exists`
    }

    const getCreatedFolderRes = await promisesFs.mkdir(path)

    if (options?.printRes) {
      consoler('getCreatedFolder', getCreatedFolderRes)
    }

    return getCreatedFolderRes
  } catch (error: any) {
    if (error.code === 'EEXIST') {
      consolerError('getCreatedFolder', 'Directory already exists.')
    } else {
      consolerError('getCreatedFolder', error) // Other error (e.g., permission issues)
    }
  }
}
