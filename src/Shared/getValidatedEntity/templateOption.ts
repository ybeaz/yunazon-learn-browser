import { isString } from '../isString'
import { isBoolean } from '../isBoolean'
import { isDefined } from '../isDefined'
import { isLengthOfNum } from '../isLengthOfNum'
import { isNotUndefined } from '../isNotUndefined'

const isLength1More = isLengthOfNum(1)
const isLength11More = isLengthOfNum(11)

export const templateOption: Record<string, any> = {
  optionID: [isDefined, isString, isLength11More],
  label: [isDefined, isString, isLength1More],
  status: [isNotUndefined, isBoolean],
}
