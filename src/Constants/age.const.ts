export type IAge = number[]

const arr = new Array(60).fill(true)
const arrNum = arr.map((item, i) => {
  return i + 14
})

export const AGE: IAge = arrNum
