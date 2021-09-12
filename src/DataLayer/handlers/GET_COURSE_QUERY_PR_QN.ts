import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { isParsableInt } from '../../Shared/isParsableInt'

const { dispatch, getState } = store

export const GET_COURSE_QUERY_PR_QN = (event: any, data: any): void => {
  const { courseID, index } = data
  const { pr, rp, qn, nq } = getParsedUrlQuery()

  const passRateIn = !!pr ? parseFloat(pr) : !!rp ? parseFloat(rp) : undefined
  const questionNumber = !!qn ? qn : !!nq ? nq : undefined

  const isReducing = questionNumber === 'all' || qn === 'inf' ? false : true

  let questionNumberIn =
    isParsableInt(questionNumber) && parseInt(questionNumber, 10)

  dispatch(
    actionSync.GET_COURSE_QUERY_PR_QN({
      courseID,
      index,
      isReducing,
      questionNumberIn,
      passRateIn,
    })
  )
}
