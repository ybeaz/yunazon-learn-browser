/**
 * @description Function to get array of objects uniq
 */

export interface IGetUniqArrBy {
  (props: string[], arr: any[]): any[]
}

export const getUniqArrBy: IGetUniqArrBy = (props, arrInp) => {
  const objKey = {}
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
