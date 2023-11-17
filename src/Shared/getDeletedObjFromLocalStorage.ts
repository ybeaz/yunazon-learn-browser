interface GetDeletedObjFromLocalStorageType {
  (obj: any): void
}

/**
 * @description Function to getDeletedObjFromLocalStorage
 * @see also: getSetObjToLocalStorage
 * @example of getting item back: const itemValue = localStorage.getItem('itemName')
 * @example of deleting item: localStorage.removeItem('itemName');
 * @import import { getDeletedObjFromLocalStorage } from '../../../Shared/getDeletedObjFromLocalStorage'
 */

export const getDeletedObjFromLocalStorage: GetDeletedObjFromLocalStorageType =
  obj => Object.keys(obj).forEach(key => localStorage.removeItem(key))
