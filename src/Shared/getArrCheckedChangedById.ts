export const getArrCheckedChangedById: Function = (
  arr: any[],
  idChanged: string,
  multi: boolean
): any[] => {
  let arrNext = arr.map(item => {
    const { id, checked, ...rest } = item
    let checkedNext = checked
    if (id === idChanged) {
      checkedNext = !checkedNext
    } else {
      if (!multi) checkedNext = false
    }
    return { ...rest, id, checked: checkedNext }
  })
  return arrNext
}
