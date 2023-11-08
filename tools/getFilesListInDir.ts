import { promises as fs } from 'fs'
import path from 'path'

interface GetFilesListInDir {
  (directoryPath: string, extname: string): Promise<string[]>
}

/**
 * @description Function to find and create an array of files in the specified directory
 * @import import { getFilesListInDir } from './getFilesListInDir'
 */
export const getFilesListInDir: GetFilesListInDir = async (
  directoryPath,
  extname = '.js'
) => {
  try {
    const files = await fs.readdir(directoryPath)

    let filesOutput: string[] = files.filter(
      file => path.extname(file).toLowerCase() === extname
    )

    return filesOutput
  } catch (error: any) {
    console.info('getFilesListInDir [28: error]', { message: error.message })
    return []
  }
}
