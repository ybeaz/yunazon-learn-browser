interface Iprops {
  timestamp: Date
  dash: boolean
  hour: boolean
  minute: boolean
  second: boolean
  rest: boolean
}

export const getDateString: Function = ({
  timestamp = new Date(),
  dash = false,
  hour = true,
  minute = true,
  second = false,
  rest = false,
}: Iprops): string => {
  const plus0 = num => `0${num.toString()}`.slice(-2)

  const d = new Date(timestamp)
  const separator = dash ? '-' : ' '
  const separator2 = dash ? '-' : ':'

  const year = d.getFullYear()
  const monthTmp = d.getMonth() + 1
  const month = plus0(monthTmp)
  const date = plus0(d.getDate())
  let hourPlus = `${separator}${plus0(d.getHours())}`
  let minutePlus = `${separator2}${plus0(d.getMinutes())}`
  let secondPlus = `${separator2}${plus0(d.getSeconds())}`
  let restPlus = `${separator2}${timestamp.toString().slice(-5)}`

  hourPlus = hour ? hourPlus : ''
  minutePlus = minute ? minutePlus : ''
  secondPlus = second ? secondPlus : ''
  restPlus = rest ? restPlus : ''

  return `${year}-${month}-${date}${hourPlus}${minutePlus}${secondPlus}${restPlus}`
}
