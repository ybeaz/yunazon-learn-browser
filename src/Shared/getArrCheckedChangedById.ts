export const getArrCheckedChangedById: Function = (
  arr: any[],
  idChanged: string
): any[] => {
  let arrNext = arr.map(item => {
    const { id, checked, ...rest } = item
    let checkedNext = checked
    if (id === idChanged) {
      checkedNext = !checkedNext
    }
    return { ...rest, id, checked: checkedNext }
  })
  return arrNext
}
