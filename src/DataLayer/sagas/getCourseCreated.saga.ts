import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'
import { getCourseS1MataDataCreated } from './getCourseS1MataDataCreated.saga'
import { getCourseS2TranscriptCreated } from './getCourseS2TranscriptCreated.saga'
import { getCourseS3SummaryCreated } from './getCourseS3SummaryCreated.saga'
import { getCourseS4QuestionsCreated } from './getCourseS4QuestionsCreated.saga'
import { getCourseS5ObjectionsCreated } from './getCourseS5ObjectionsCreated.saga'
import { getCourseS6ModuleCreated } from './getCourseS6ModuleCreated.saga'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add originUri to courseCreateProgress */
    /* Add metaData to courseCreateProgress */
    yield getCourseS1MataDataCreated()

    /* Add transcript to courseCreateProgress */
    yield getCourseS2TranscriptCreated()

    /* Add summary to courseCreateProgress */
    // yield getCourseS3SummaryCreated()

    /* Add questions to courseCreateProgress */
    // yield getCourseS4QuestionsCreated()

    /* Add objections to courseCreateProgress */
    // yield getCourseS5ObjectionsCreated()

    /* Create course and module */
    // yield getCourseS6ModuleCreated()
  } catch (error: any) {
    console.info(
      'getCourseCreated.saga  [44]',
      error.name + ': ' + error.message
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
