export const SELECT_ON_CHANGE = (event: any, data: any): void => {
  const arrSelected =
    event.target.selectedOptions &&
    Array.from(event.target.selectedOptions, (option: any) => option.value)

  console.info('handleEvents [42]', {
    data,
  })
}
