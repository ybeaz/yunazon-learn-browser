import { takeEvery, put, select } from 'redux-saga/effects'

import {
  RootStoreType,
  ActionReduxType,
  CreateModuleStagesEnumType,
} from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'
import { getCourse10MataDataCreated } from './getCourse10MataDataCreated.saga'
import { getCourse20TranscriptCreated } from './getCourse20TranscriptCreated.saga'
import { getCourse35SummaryCreated } from './getCourse35SummaryCreated.saga'
import { getCourse45QuestionsCreated } from './getCourse45QuestionsCreated.saga'
import { getCourse55ObjectionsCreated } from './getCourse55ObjectionsCreated.saga'
import { getCourse60ModuleCreated } from './getCourse60ModuleCreated.saga'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  /*
  CreateModuleStagesEnumType['metaData'],
  CreateModuleStagesEnumType['transcript'],
  CreateModuleStagesEnumType['summary'],
  CreateModuleStagesEnumType['questions'],
  CreateModuleStagesEnumType['objections'],
  CreateModuleStagesEnumType['courseModule']
*/
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )

  const {
    componentsState: { createModuleStages },
  } = stateSelected

  try {
    /* Add originUri to courseCreateProgress */
    /* Add metaData to courseCreateProgress */
    if (createModuleStages[CreateModuleStagesEnumType['metaData']].isActive)
      yield getCourse10MataDataCreated()

    /* Add transcript to courseCreateProgress */
    if (createModuleStages[CreateModuleStagesEnumType['transcript']].isActive)
      yield getCourse20TranscriptCreated()

    /* Add summary to courseCreateProgress */
    if (createModuleStages[CreateModuleStagesEnumType['summary']].isActive)
      yield getCourse35SummaryCreated()

    /* Add questions to courseCreateProgress */
    if (createModuleStages[CreateModuleStagesEnumType['questions']].isActive)
      yield getCourse45QuestionsCreated()

    /* Add objections to courseCreateProgress */
    if (createModuleStages[CreateModuleStagesEnumType['objections']].isActive)
      yield getCourse55ObjectionsCreated()

    /* Create course and module */
    if (createModuleStages[CreateModuleStagesEnumType['courseModule']].isActive)
      yield getCourse60ModuleCreated()
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
