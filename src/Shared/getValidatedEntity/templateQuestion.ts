import { isString } from '../isString'
import { isNumber } from '../isNumber'
import { isBoolean } from '../isBoolean'
import { isDefined } from '../isDefined'
import { isLengthOfNum } from '../isLengthOfNum'
import { isArray } from '../isArray'
import { isObject } from '../isObject'
import { isNotUndefined } from '../isNotUndefined'

const isLength1More = isLengthOfNum(1)
const isLength11More = isLengthOfNum(11)

export const templateQuestion: Record<string, any> = {
  questionID: [isDefined, isString, isLength11More],
  capture: [isDefined, isString, isLength1More],
  isActive: [isNotUndefined, isBoolean],
  options: [isDefined, isArray],
}
