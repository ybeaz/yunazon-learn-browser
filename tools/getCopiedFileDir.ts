import { promises as fs } from 'fs'

interface GetCopiedFileDirType {
  (source: string, destination: string, overwrite: boolean): Promise<string>
}

/**
 * @import import { getCopiedFileDir } from './getCopiedFileDir'
 */
export const getCopiedFileDir: GetCopiedFileDirType = async (
  source,
  destination,
  overwrite = false
) => {
  try {
    // Check if the destination file exists
    const destinationExists = await fs
      .access(destination)
      .then(() => true)
      .catch(() => false)

    // If the destination file exists and overwrite is not true, throw an error
    if (destinationExists && !overwrite) {
      throw new Error(`File "${destination}" already exists.`)
    }

    // Read the source file and write it to the destination file
    const data = await fs.readFile(source)

    await fs.writeFile(destination, data)

    return destination
  } catch (error: any) {
    const message = `Error copying file: ${error.message}`
    return message
  }
}
