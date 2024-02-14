import { isString } from '../isString'
import { isNumber } from '../isNumber'
import { isBoolean } from '../isBoolean'
import { isDefined } from '../isDefined'
import { isLengthOfNum } from '../isLengthOfNum'
import { isArray } from '../isArray'
import { isObject } from '../isObject'
import { isNotUndefined } from '../isNotUndefined'

const isLength1More = isLengthOfNum(1)
const isLength2More = isLengthOfNum(2)
const isLength6More = isLengthOfNum(6)
const isLength11More = isLengthOfNum(11)

export const templateModule: Record<string, any> = {
  moduleID: [isDefined, isString, isLength11More],
  creatorID: [isDefined, isString, isLength11More],
  contentID: [isDefined, isString, isLength11More],
  isActive: [isNotUndefined, isBoolean],
  capture: [isDefined, isString],
  description: [isDefined, isString],
  tags: [isDefined, isArray],
  stages: [isDefined, isArray],
  language: [isDefined, isString],
  dateCreated: [isDefined, isNumber],
  dateUpdated: [isDefined, isNumber],
  dateDeleted: [isNotUndefined],
  index: [isNumber],
  contentType: [isDefined, isString],
  duration: [isDefined, isString],
  questionNumber: [isDefined, isNumber],
  passRate: [isDefined, isNumber],
  meta: [isDefined, isObject],
  transcriptList: [isDefined, isArray],
  summary: [isDefined, isArray],
  questions: [isDefined, isArray],
  objections: [isDefined, isArray],
}
