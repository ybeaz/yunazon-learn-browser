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
  const { source, ...obj } = objIn

  if (options?.printRes) {
    console.log('getLocalStorageSetObjTo [16]', { source, obj })
  }
  Object.keys(obj).forEach(key => localStorage.setItem(key, obj[key]))
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = {}
  const outout = getLocalStorageSetObjTo(input)
  console.log('getLocalStorageSetObjTo [48]', { input, outout })
}
