import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'
import { getCourse10MataDataCreated } from './getCourse10MataDataCreated.saga'
import { getCourse20TranscriptCreated } from './getCourse20TranscriptCreated.saga'
import { getCourse35SummaryCreated } from './getCourse35SummaryCreated.saga'
import { getCourse45QuestionsCreated } from './getCourse45QuestionsCreated.saga'
import { getCourse50ObjectionsCreated } from './getCourse50ObjectionsCreated.saga'
import { getCourse60ModuleCreated } from './getCourse60ModuleCreated.saga'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add originUri to courseCreateProgress */
    /* Add metaData to courseCreateProgress */
    yield getCourse10MataDataCreated()

    /* Add transcript to courseCreateProgress */
    yield getCourse20TranscriptCreated()

    /* Add summary to courseCreateProgress */
    yield getCourse35SummaryCreated()

    /* Add questions to courseCreateProgress */
    yield getCourse45QuestionsCreated()

    /* Add objections to courseCreateProgress */
    // yield getCourse50ObjectionsCreated()

    /* Create course and module */
    // yield getCourse60ModuleCreated()
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
