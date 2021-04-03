import { v4 as uuidv4 } from 'uuid'

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
    const uuid = uuidv4()
    const id = `${prefix}-${uuid}`
    return { ...item, id }
  })
}
