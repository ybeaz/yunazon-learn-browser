import { RootStoreType } from '../Interfaces/RootStoreType'
import { rootStoreDefault } from '../DataLayer/rootStoreDefault'
import { getConvertedType } from './getConvertedType'

export type GetLocalStorageStoreStateReadParamsType = any

export type GetLocalStorageStoreStateReadResType = RootStoreType

interface GetLocalStorageStoreStateReadType {
  (options?: { printRes: boolean }): GetLocalStorageStoreStateReadResType
}

/**
 * @description Function to getLocalStorageStoreStateRead
 * @run ts-node src/shared/utils/getLocalStorageStoreStateRead.ts
 * @import import { getLocalStorageStoreStateRead } from '../Shared/getLocalStorageStoreStateRead'
 */

export const getLocalStorageStoreStateRead: GetLocalStorageStoreStateReadType =
  options => {
    let storeState: RootStoreType = rootStoreDefault

    try {
      const storeStateJson = localStorage.getItem('storeStateJson')
      if (storeStateJson) storeState = JSON.parse(storeStateJson)

      if (options?.printRes) {
        console.log('getLocalStorageStoreStateRead', { storeState })
      }
    } catch (error: any) {
      console.log('getLocalStorageStoreStateRead', 'Error', error.message)
    } finally {
      return storeState
    }
  }

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = ''
  const outout = getLocalStorageStoreStateRead({ printRes: true })
  console.log('getConvertedType [48]', { input, outout })
}
