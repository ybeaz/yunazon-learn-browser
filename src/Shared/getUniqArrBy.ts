export interface GetUniqArrByType {
  (props: string[], arr: any[]): any[]
}

/**
 * @description Function to get array of objects uniq
 * @import import { getUniqArrBy } from '../Shared/getUniqArrBy'
 */
export const getUniqArrBy: GetUniqArrByType = (props, arrInp) => {
  const objKey: Record<string, boolean> = {}
  return arrInp.reduce((res: any[], item) => {
    const valStr = props.reduce(
      (res2: string, prop: string) => `${res2}${item[prop]}`,
      ''
    )
    if (objKey[valStr]) return res
    objKey[valStr] = true
    return [...res, item]
  }, [])
}
