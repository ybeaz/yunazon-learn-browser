/**
 * @description Funciton to convert duration in miliseconds into human understandable string
 * @param duration
 * @returns
 */

export const getMsToTime = duration => {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  let hoursStr = hours < 10 ? '0' + hours : hours
  let minutesStr = minutes < 10 ? '0' + minutes : minutes
  let secondsStr = seconds < 10 ? '0' + seconds : seconds

  hoursStr = hoursStr === '00' ? '' : `${hoursStr}:`
  minutesStr = hoursStr === '00' && minutesStr === '00' ? '' : `${minutesStr}:`
  secondsStr =
    hoursStr === '00' && minutesStr === '00' && secondsStr === '00'
      ? ''
      : `${secondsStr}`

  let res = hoursStr ? `${hoursStr}${minutesStr}` : `${minutesStr}${secondsStr}`
  res = res[0] === '0' ? res.slice(1) : res

  return res
}
