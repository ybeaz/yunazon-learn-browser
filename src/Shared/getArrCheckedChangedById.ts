export const getArrCheckedChangedById: Function = (
  arr: any[],
  idChanged: string,
  multi: boolean
): any[] => {
  let arrNext = arr.map(item => {
    const { optionID, checked, ...rest } = item
    let checkedNext = checked
    if (optionID === idChanged) {
      checkedNext = !checkedNext
    } else {
      if (!multi) checkedNext = false
    }
    return { ...rest, optionID, checked: checkedNext }
  })
  return arrNext
}
