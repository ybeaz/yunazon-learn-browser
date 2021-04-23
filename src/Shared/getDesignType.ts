/**
 * @description Function to "calculate" design type of an optional question
 * @param options
 * @returns
 */
export const getDesignType: Function = (options: any): string => {
  const optionsTrue = options.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + +currentValue.status,
    0
  )
  return optionsTrue === 1 ? 'RadioButton' : 'CheckBox'
}
