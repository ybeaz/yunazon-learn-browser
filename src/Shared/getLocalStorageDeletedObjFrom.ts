interface GetDeletedObjFromLocalStorageType {
  (obj: any): void
}

/**
 * @description Function to getLocalStorageDeletedObjFrom
 * @see also: getLocalStorageSetObjTo
 * @example of deleting item: localStorage.removeItem('itemName');
 * @import import { getLocalStorageDeletedObjFrom } from '../../../Shared/getLocalStorageDeletedObjFrom'
 */

export const getLocalStorageDeletedObjFrom: GetDeletedObjFromLocalStorageType =
  obj => Object.keys(obj).forEach(key => localStorage.removeItem(key))
