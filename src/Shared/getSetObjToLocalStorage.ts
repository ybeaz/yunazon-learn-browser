/**
 * @description Function to getSetObjToLocalStorage
 * @run ts-node src/Shared/getSetObjToLocalStorage.ts
 * @import import { getSetObjToLocalStorage } from '../Shared/getSetObjToLocalStorage'
 */
export const getSetObjToLocalStorage: Function = (
  obj: Record<string, string>
): void => {
  Object.keys(obj).forEach(key => localStorage.setItem(key, obj[key]))
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = ''
  const outout = getSetObjToLocalStorage(input)
  console.log('getSetObjToLocalStorage [48]', { input, outout })
}
