interface GetDesignTypeInterface {
  (options: any): { designType: string; multi: boolean }
}

/**
 * @description Function to "calculate" design type of an optional question
 * @param options
 * @returns
 */
export const getDesignType: GetDesignTypeInterface = options => {
  const optionsTrue = options.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + +currentValue.status,
    0
  )

  const designType = optionsTrue === 1 ? 'RadioButton' : 'CheckBox'
  const multi = optionsTrue === 1 ? false : true
  return { designType, multi }
}
