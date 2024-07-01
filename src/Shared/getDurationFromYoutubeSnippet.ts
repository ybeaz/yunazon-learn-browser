import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type GetDurationFromYoutubeSnippetParamsType = string

export type GetDurationFromYoutubeSnippetOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetDurationFromYoutubeSnippetResType = {
  sign: string
  years: number
  months: number
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
  timeReadable: string
  miliseconds: number
}

interface GetDurationFromYoutubeSnippetType {
  (
    stringIn: GetDurationFromYoutubeSnippetParamsType,
    options?: GetDurationFromYoutubeSnippetOptionsType
  ): GetDurationFromYoutubeSnippetResType
}

const optionsDefault: Required<GetDurationFromYoutubeSnippetOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getDurationFromYoutubeSnippet
 * @run ts-node src/shared/utils/getDurationFromYoutubeSnippet.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getDurationFromYoutubeSnippet.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getDurationFromYoutubeSnippet, GetDurationFromYoutubeSnippetParamsType, GetDurationFromYoutubeSnippetResType } from '../shared/utils/getDurationFromYoutubeSnippet'
 */
export const getDurationFromYoutubeSnippet: GetDurationFromYoutubeSnippetType = (
  iso8601Duration: GetDurationFromYoutubeSnippetParamsType,
  optionsIn: GetDurationFromYoutubeSnippetOptionsType = optionsDefault
) => {
  const options: Required<GetDurationFromYoutubeSnippetOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: GetDurationFromYoutubeSnippetResType = {
    sign: '+',
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    timeReadable: '0:00',
    miliseconds: 0,
  }

  try {
    const iso8601DurationRegex =
      /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?(?:T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?)?/

    const matches = iso8601Duration.match(iso8601DurationRegex) || []
    const sign = matches[1] === undefined ? '+' : '-'
    const years = matches[2] === undefined ? 0 : parseInt(matches[2], 10)
    const months = matches[3] === undefined ? 0 : parseInt(matches[3], 10)
    const weeks = matches[4] === undefined ? 0 : parseInt(matches[4], 10)
    const days = matches[5] === undefined ? 0 : parseInt(matches[5], 10)
    const hours = matches[6] === undefined ? 0 : parseInt(matches[6], 10)
    const minutes = matches[7] === undefined ? 0 : parseInt(matches[7], 10)
    const seconds = matches[8] === undefined ? 0 : parseFloat(matches[8])

    const yearsAdd = years ? `${years}:` : ''
    const monthsAdd = months ? `${months}:` : ''
    const weeksAdd = weeks ? `${weeks}:` : ''
    const daysAdd = days ? `${days}:` : ''
    const hoursAdd = hours ? `${hours}:` : ''
    const minutesAdd =
      hours && minutes === 0
        ? '00:'
        : hours && minutes && minutes < 10
          ? `0${minutes}:`
          : minutes
            ? `${minutes}:`
            : '0:'
    const secondsAdd =
      Math.round(seconds) === 0
        ? '00'
        : Math.round(seconds) < 10
          ? `0${Math.round(seconds)}`
          : `${Math.round(seconds)}`

    const timeReadable = `${yearsAdd}${monthsAdd}${weeksAdd}${daysAdd}${hoursAdd}${minutesAdd}${secondsAdd}`

    const miliseconds =
      years * 365 * 24 * 60 * 60 * 1000 +
      months * 30 * 24 * 60 * 60 * 1000 +
      weeks * 7 * 24 * 60 * 60 * 1000 +
      days * 24 * 60 * 60 * 1000 +
      hours * 60 * 60 * 1000 +
      minutes * 60 * 1000 +
      seconds * 1000

    output = {
      sign,
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
      timeReadable,
      miliseconds,
    }
  } catch (error: any) {
    console.log('getDurationFromYoutubeSnippet', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getDurationFromYoutubeSnippet [63]', { output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const params = ''
    const output: any = getDurationFromYoutubeSnippet(params, { printRes: true })
    consoler('getDurationFromYoutubeSnippet [61]', 'output', output)
  })()
}
