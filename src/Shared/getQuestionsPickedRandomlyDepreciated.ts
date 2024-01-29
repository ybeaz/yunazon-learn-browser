import {
  getArrayElemPickedRandomly,
  GetArrayElemPickedRandomlyOptionsType,
} from './getArrayElemPickedRandomly'

import { getParsedUrlQuery } from './getParsedUrlQuery'
import { isParsableInt } from './isParsableInt'

export type GetQuestionsPickedRandomlyDepreciatedParamsType = any[]

export type GetQuestionsPickedRandomlyDepreciatedOptionsType = {
  printRes?: boolean
  parentFunction?: string
  numberToPick?: number
}

export type GetQuestionsPickedRandomlyDepreciatedResType = any

interface GetQuestionsPickedRandomlyDepreciatedType {
  (
    params: GetQuestionsPickedRandomlyDepreciatedParamsType,
    options?: GetQuestionsPickedRandomlyDepreciatedOptionsType
  ): GetQuestionsPickedRandomlyDepreciatedResType
}

const optionsDefault: Required<GetQuestionsPickedRandomlyDepreciatedOptionsType> =
  {
    printRes: false,
    parentFunction: 'not specified',
    numberToPick: 6,
  }

/**
 * @status DEPRECIATED due to switching to modules
 * @description Function to getQuestionsPickedRandomlyDepreciated
 * @run ts-node src/shared/utils/getQuestionsPickedRandomlyDepreciated.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getQuestionsPickedRandomlyDepreciated.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getQuestionsPickedRandomlyDepreciated, GetQuestionsPickedRandomlyDepreciatedParamsType } from '../Shared/getQuestionsPickedRandomlyDepreciated'
 */
export const getQuestionsPickedRandomlyDepreciated: GetQuestionsPickedRandomlyDepreciatedType =
  (
    courses: GetQuestionsPickedRandomlyDepreciatedParamsType,
    optionsIn: GetQuestionsPickedRandomlyDepreciatedOptionsType = optionsDefault
  ) => {
    const options: Required<GetQuestionsPickedRandomlyDepreciatedOptionsType> =
      {
        ...optionsDefault,
        ...optionsIn,
      }

    const { printRes, parentFunction } = options

    let output: any[] = []

    try {
      const { pr, rp, qn, nq } = getParsedUrlQuery()

      output = courses.map((course: any) => {
        const { modules, ...theRestOfCourse } = course

        const modulesNext = modules.map((module: any) => {
          const { questions, questionNumber, passRate, ...theRestOfModule } =
            module

          let questionNumberNext: number = questionNumber
          let passRateNext: number = passRate || 0.75

          if (
            (qn || nq) &&
            qn !== 'all' &&
            qn !== 'inf' &&
            nq !== 'all' &&
            nq !== 'inf'
          ) {
            const questionNumberQuery: string = qn ? qn : nq ? nq : '6'
            questionNumberNext = isParsableInt(questionNumberQuery)
              ? parseInt(questionNumberQuery, 10)
              : questionNumberNext
          } else if (
            ((qn || nq) && qn === 'all') ||
            qn === 'inf' ||
            nq === 'all' ||
            nq === 'inf'
          ) {
            questionNumberNext = questions.length
          }

          if (pr || pr) {
            passRateNext = !!pr
              ? parseFloat(pr)
              : !!rp
                ? parseFloat(rp)
                : passRateNext
          }

          const questionsNext = getArrayElemPickedRandomly(questions, {
            numberToPick: questionNumberNext,
          })

          return {
            ...theRestOfModule,
            questionNumber: questionNumberNext,
            passRate: passRateNext,
            questions: questionsNext,
          }
        })

        return { ...theRestOfCourse, modules: modulesNext }
      })

      if (printRes) {
        console.log('getQuestionsPickedRandomlyDepreciated [43]', { output })
      }
    } catch (error: any) {
      console.log('getQuestionsPickedRandomlyDepreciated', 'Error', {
        parentFunction,
        message: error.messag,
      })
    } finally {
      return output
    }
  }

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const courses: any[] = []
    const output = getQuestionsPickedRandomlyDepreciated(courses, {
      printRes: true,
    })
    // console.log('getQuestionsPickedRandomlyDepreciated [60]', { courses, output })
  })()
}
