export const withTryCatchFinallySaga: (
  saga: (params: any) => Iterable<any>,
  options?: { optionsDefault?: { funcParent?: string }; resDefault?: any }
) => any = (saga: any, options?: any): any => {
  const { optionsDefault: { funcParent } = { funcParent: '' }, resDefault = null } = options || {}

  const funcParentAdd = funcParent ? { funcParent } : {}

  return function* (params: any) {
    let result = resDefault

    try {
      result = yield saga(params)
    } catch (error) {
      console.info(
        '📕 %cwithTryCatchFinallySaga [15] %cERROR',
        'color: #c40000',
        'color: #c40000; font-weight: bold',
        {
          ...funcParentAdd,
          funcName: saga.name,
          error: { ...error, stack: error?.stack.split('\n') },
        }
      )
    } finally {
      return result
    }
  }
}
