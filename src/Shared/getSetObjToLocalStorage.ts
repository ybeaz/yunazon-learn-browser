interface GetSetObjToLocalStorageType {
  (objIn: Record<string, any>, options?: { printRes?: boolean }): void
}

/**
 * @description Function to getSetObjToLocalStorage
 * @run ts-node src/Shared/getSetObjToLocalStorage.ts
 * @import import { getSetObjToLocalStorage } from '../Shared/getSetObjToLocalStorage'
 */
export const getSetObjToLocalStorage: GetSetObjToLocalStorageType = (
  objIn: Record<string, any>,
  options
): void => {
  const { source, ...obj } = objIn

  if (options?.printRes) {
    console.log('getSetObjToLocalStorage [16]', { source, obj })
  }
  Object.keys(obj).forEach(key => localStorage.setItem(key, obj[key]))
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = {}
  const outout = getSetObjToLocalStorage(input)
  console.log('getSetObjToLocalStorage [48]', { input, outout })
}
