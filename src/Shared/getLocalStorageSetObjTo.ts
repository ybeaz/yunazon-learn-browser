interface GetSetObjToLocalStorageType {
  (objIn: Record<string, any>, options?: { printRes?: boolean }): void
}

/**
 * @description Function to getLocalStorageSetObjTo
 * @run ts-node src/Shared/getLocalStorageSetObjTo.ts
 * @import import { getLocalStorageSetObjTo } from '../Shared/getLocalStorageSetObjTo'
 */
export const getLocalStorageSetObjTo: GetSetObjToLocalStorageType = (
  objIn: Record<string, any>,
  options
): void => {
  try {
    const { source, ...obj } = objIn

    Object.keys(obj).forEach(key => {
      localStorage.setItem(key, JSON.stringify(obj[key]))
    })

    if (options?.printRes) {
      console.log('getLocalStorageSetObjTo [24]', { source, obj })
    }
  } catch (error: any) {
    console.log('getLocalStorageSetObjTo', 'Error', error.message)
  } finally {
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = {}
  const outout = getLocalStorageSetObjTo(input)
  console.log('getLocalStorageSetObjTo [48]', { input, outout })
}
