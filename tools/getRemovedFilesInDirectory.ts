import { join } from 'path'
import fs, { promises as promisesFs } from 'fs'
import { consoler } from '@yourails_common'
import { consolerError } from '@yourails_common'

type GetRemovedFilesInDirectoryOptionsType = {
  printRes?: boolean
  parentFunc?: string
  preserveDir?: boolean
}

interface GetRemovedFilesInDirectoryType {
  (directory: string, options?: GetRemovedFilesInDirectoryOptionsType): Promise<string>
}

const optionsDefault: Required<GetRemovedFilesInDirectoryOptionsType> = {
  printRes: false,
  parentFunc: '',
  preserveDir: true,
}

/**
 * @description Function to getRemovedFilesInDirectory
 * @import import { getRemovedFilesInDirectory } from './getRemovedFilesInDirectory'
 */

export const getRemovedFilesInDirectory: GetRemovedFilesInDirectoryType = async (
  directory,
  optionsIn
) => {
  const options: Required<GetRemovedFilesInDirectoryOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, preserveDir } = options

  try {
    if (!fs.existsSync(directory)) {
      const message = `${directory} does not exist`
      consolerError('getRemovedFilesInDirectory [23]:', message)
      return message
    }

    await promisesFs.chmod(directory, 0o755)
    await promisesFs.rm(directory, { recursive: true, force: true })
    if (preserveDir) await promisesFs.mkdir(directory)

    if (printRes) {
      consoler('getRemovedFilesInDirectory [31]:', directory)
    }

    return directory
  } catch (error: any) {
    consolerError('getRemovedFilesInDirectory [36]:', error) // Other error (e.g., permission issues)
    return error
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node tools/getRemovedFilesInDirectory.ts
 */
if (require.main === module) {
  ;(async () => {
    const directory: string = join(__dirname, '..', '/web-build')
    const output = await getRemovedFilesInDirectory(directory, {
      preserveDir: true,
      printRes: false,
    })
    consoler('getRemovedFilesInDirectory:', `${output} yes`)
  })()
}
