import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { isParsableInt } from '../../Shared/isParsableInt'
import { getCourseByModuleId } from '../../Shared/getCourseByModuleId'

const { dispatch, getState } = store

/**
 * @status DEPRECIATED, see GET_MODULE_DATA > getModuleData.saga.ts > getPreparedCourses.ts > getQuestionsPickedRandomly.ts
 * @comments
 * QN/NQ - questions number
 * PR/RP - pass rate
 *
 */
export const GET_COURSE_QUERY_PR_QN_DEPRECIATED: ActionEventType = (
  event,
  data
) => {
  const moduleID = data?.moduleID

  const { courses } = getState()

  const course = getCourseByModuleId({ moduleID, courses })

  const courseID = course?.courseID || '__'
  const modules = course?.modules || []

  if (!modules.length) return

  const moduleIndex = modules.findIndex(module => module.moduleID === moduleID)

  let questionNumberNext: number = modules[moduleIndex].questionNumber
  let passRateNext: number = modules[moduleIndex]?.passRate || 0.75

  const { pr, rp, qn, nq } = getParsedUrlQuery()

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
    questionNumberNext = modules[moduleIndex].questions.length
  }

  if (pr || pr) {
    passRateNext = !!pr ? parseFloat(pr) : !!rp ? parseFloat(rp) : passRateNext
  }

  const modulesNext = [...modules]
  modulesNext[moduleIndex] = {
    ...modules[moduleIndex],
    questionNumber: questionNumberNext,
    passRate: passRateNext,
  }
  const courseNext = { ...course, modules: modulesNext }

  dispatch(
    actionSync.UPDATE_COURSE_BY_COURSEID({
      courseID,
      course: courseNext,
    })
  )
}
