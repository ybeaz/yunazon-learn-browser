import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'
import { getCourseS10MataDataCreated } from './getCourseS10MataDataCreated.saga'
import { getCourseS20TranscriptCreated } from './getCourseS20TranscriptCreated.saga'
import { getCourseS30SummaryCreated } from './getCourseS30SummaryCreated.saga'
import { getCourseS40QuestionsCreated } from './getCourseS40QuestionsCreated.saga'
import { getCourseS50ObjectionsCreated } from './getCourseS50ObjectionsCreated.saga'
import { getCourseS60ModuleCreated } from './getCourseS60ModuleCreated.saga'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add originUri to courseCreateProgress */
    /* Add metaData to courseCreateProgress */
    yield getCourseS10MataDataCreated()

    /* Add transcript to courseCreateProgress */
    yield getCourseS20TranscriptCreated()

    /* Add summary to courseCreateProgress */
    yield getCourseS30SummaryCreated()

    /* Add questions to courseCreateProgress */
    // yield getCourseS40QuestionsCreated()

    /* Add objections to courseCreateProgress */
    // yield getCourseS50ObjectionsCreated()

    /* Create course and module */
    // yield getCourseS60ModuleCreated()
  } catch (error: any) {
    console.info(
      'getCourseCreated.saga [37] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseCreated = withDebounce(getCourseCreatedGenerator, 500)

export default function* getCourseCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_CREATED.REQUEST().type],
    getCourseCreated
  )
}
