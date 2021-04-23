import { getMsToTime } from './getMsToTime'

export const getMultipliedTimeStr = (str, multiplier) => {
  const timeArr = str.split(':').map(item => parseInt(item, 10))
  let duration = ''
  let time = 0

  if (timeArr.length === 1) {
    time = timeArr[0] * multiplier
    duration = getMsToTime(time * 1000)
  } else if (timeArr.length === 2) {
    const minutes = timeArr[0]
    const seconds = timeArr[1]
    time = (minutes * 60 + seconds) * multiplier
    console.info('[16]', { time, minutes, seconds, timeArr, str, multiplier })
    duration = getMsToTime(time * 1000)
  } else if (timeArr.length === 3) {
    const seconds = timeArr[0]
    const minutes = timeArr[1]
    const hours = timeArr[2]
    time = (hours * 60 * 60 + minutes * 60 + seconds) * multiplier
    duration = getMsToTime(time * 1000)
  } else {
    duration = null
  }

  const units = time < 60 ? 'sec' : time < 60 * 60 ? 'min' : 'hour'
  console.info('[29]', { units, time, duration, timeArr, str, multiplier })
  return { duration, units }
}
