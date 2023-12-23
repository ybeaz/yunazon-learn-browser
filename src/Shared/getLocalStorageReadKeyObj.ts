interface GetSetObjToLocalStorageType {
  (key: string, options?: { printRes?: boolean }): any
}

/**
 * @description Function to getLocalStorageReadKeyObj
 * @run ts-node src/Shared/getLocalStorageReadKeyObj.ts
 * @import import { getLocalStorageReadKeyObj } from '../Shared/getLocalStorageReadKeyObj'
 */
export const getLocalStorageReadKeyObj: GetSetObjToLocalStorageType = (
  key: string,
  options
) => {
  let output: any = null

  try {
    const entity = localStorage.getItem(key) || 'null'
    output = JSON.parse(entity)

    if (options?.printRes) {
      console.log('getLocalStorageReadKeyObj [24]', { output })
    }
  } catch (error: any) {
    console.log('getLocalStorageReadKeyObj', 'Error', error.message)
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  //   const input = {}
  //   const outout = getLocalStorageReadKeyObj(input)
  // console.log('getLocalStorageReadKeyObj [48]', { input, outout })
}
