import { RootStoreType } from '../Interfaces/RootStoreType'
import { rootStoreDefault } from '../DataLayer/rootStoreDefault'
import { getSetObjToLocalStorage } from './getSetObjToLocalStorage'
import { getLocalStorageStoreStateRead } from './getLocalStorageStoreStateRead'
import { isObject } from './isObject'

export type GetLocalStorageStoreStateSetParamsType = {
  source: string
  storeState: RootStoreType
}

export type GetLocalStorageStoreStateSetResType = string

interface GetLocalStorageStoreStateSetType {
  (
    params: GetLocalStorageStoreStateSetParamsType,
    options?: { printRes?: boolean }
  ): GetLocalStorageStoreStateSetResType
}

/**
 * @description Function to getLocalStorageStoreStateSet
 * @run ts-node src/shared/utils/getLocalStorageStoreStateSet.ts
 * @import import { getLocalStorageStoreStateSet } from '../Shared/getLocalStorageStoreStateSet'
 */

export const getLocalStorageStoreStateSet: GetLocalStorageStoreStateSetType = (
  params,
  options = { printRes: false }
) => {
  let storeStateJson = ''

  try {
    const { source, storeState: storeStateApp } = params

    const storeStateLocalStorage = getLocalStorageStoreStateRead()

    if (
      isObject(storeStateLocalStorage) &&
      JSON.stringify(rootStoreDefault) === JSON.stringify(storeStateApp)
    )
      storeStateJson = JSON.stringify(storeStateLocalStorage)
    else {
      storeStateJson = JSON.stringify(storeStateApp)
      getSetObjToLocalStorage({ storeStateJson })
    }
    if (options?.printRes) {
      console.log('getLocalStorageStoreStateSet [48]', {
        source,
        storeStateApp,
        storeStateLocalStorage,
      })
    }
  } catch (error: any) {
    console.log('getLocalStorageStoreStateSet', 'Error', error.message)
  } finally {
    return storeStateJson
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = {} as GetLocalStorageStoreStateSetParamsType
  const outout = getLocalStorageStoreStateSet(input, { printRes: true })
  console.log('getConvertedType [48]', { input, outout })
}
