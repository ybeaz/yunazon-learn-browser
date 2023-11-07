import { nanoid } from 'nanoid'

/**
 * @description NOT USED anymore, but getProvidedContentID(...) instead
 * @param arr
 * @param prefix
 * @returns
 */
export const getAddedArrIdPrefix: Function = (
  arr: any[],
  prefix: string
): any[] => {
  return arr.map(item => {
    const nanoID = nanoid()
    const id = `${prefix}-${nanoID}`
    return { ...item, id }
  })
}
