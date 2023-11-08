import fsSync, { promises as fs } from 'fs'

import { getSplitedStrDirFile } from './getSplitedStrDirFile'

/**
 * @description Funciton to give permission to read and write to the directory
 * @import import { givePermission } from './givePermission'
 */
export const givePermission = async (path: string) => {
  const { dir } = getSplitedStrDirFile(path)

  if (dir && !fsSync.existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true })
  }

  // fs.chmodSync(path, 0o777)

  await fs.chmod(path, 0o766)
}
