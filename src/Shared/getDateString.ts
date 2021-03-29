export const getDateString: Function = (timestamp: any): string => {
  const plus0 = num => `0${num.toString()}`.slice(-2)

  const d = new Date(timestamp)

  const year = d.getFullYear()
  const monthTmp = d.getMonth() + 1
  const month = plus0(monthTmp)
  const date = plus0(d.getDate())
  const hour = plus0(d.getHours())
  const minute = plus0(d.getMinutes())
  const second = plus0(d.getSeconds())
  const rest = timestamp.toString().slice(-5)

  return `${year}-${month}-${date} ${hour}:${minute}`
}
