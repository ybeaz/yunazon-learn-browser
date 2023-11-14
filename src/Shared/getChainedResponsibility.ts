import { isObject } from './isObject'

type FuncType = (params: any, options?: any) => any

export type ExecDictType = {
  isActive?: boolean
  printRes?: boolean
  func?: FuncType
  options?: any
}

type GetChainedResponsibilityOutType<T> = {
  result: any
  exec: (
    func: (...params: any) => T,
    params?: any
  ) => GetChainedResponsibilityOutType<T>
  done: () => T
  forEach: (execDict: ExecDictType[]) => T
}

interface GetChainedResponsibilityType<T> {
  (entity: T): GetChainedResponsibilityOutType<T>
}

/**
 * @description Function to getChainedResponsibility
 * @import import { getChainedResponsibility } from './Shared/getChainedResponsibility'
 */

export const getChainedResponsibility: GetChainedResponsibilityType<
  any
> = entity => {
  const outputObj: GetChainedResponsibilityOutType<any> = {
    result: entity || [],
    exec(func: FuncType, params?: any) {
      const paramsNext: [any, any?] =
        params && isObject(params) ? [this.result, params] : [this.result]

      this.result =
        this.result && paramsNext.length ? func.apply(null, paramsNext) : []
      return outputObj
    },
    done() {
      return this.result
    },
    forEach(execTuple: ExecDictType[]) {
      for (let execDict of execTuple) {
        const { isActive = true, printRes, func, options } = execDict
        if (typeof isActive !== undefined && isActive === false) continue
        if (func) {
          this.exec(func, options)
        }
        if (printRes) {
          console.info('getChainedResponsibility [63]', { res: this.result })
        }
      }
      return this.result
    },
  }

  return outputObj
}
