import { takeEvery, put, select, delay } from 'redux-saga/effects'

import {
  RootStoreType,
  ActionReduxType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
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

  try {
    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        course: {},
        metaData: {},
        questions: [],
        questionsChunks: [],
        summary: [],
        summaryChunks: [],
        transcript: [],
        transcriptChunks: [],
      })
    )

    /* Add originUri to courseCreateProgress */
    /* Add metaData to courseCreateProgress */
    const stateSelected10: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages10 },
    } = stateSelected10

    if (createModuleStages10[CreateModuleStagesEnumType['metaData']].isActive)
      yield getCourse10MataDataCreated()

    /* Add transcript to courseCreateProgress */
    const stateSelected20: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages20 },
    } = stateSelected20

    if (
      createModuleStages20[CreateModuleStagesEnumType['transcript']].isActive &&
      createModuleStages20[CreateModuleStagesEnumType['metaData']].status ===
        CreateCourseStatusEnumType['success']
    )
      yield getCourse20TranscriptCreated()

    /* Add summary to courseCreateProgress */
    const stateSelected35: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages35 },
    } = stateSelected35

    if (
      createModuleStages35[CreateModuleStagesEnumType['summary']].isActive &&
      createModuleStages35[CreateModuleStagesEnumType['transcript']].status ===
        CreateCourseStatusEnumType['success']
    )
      yield getCourse35SummaryCreated()

    /* Add questions to courseCreateProgress */
    const stateSelected45: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages45, summary },
    } = stateSelected45

    console.info('getCourseCreated.saga [57]', {
      metaData: createModuleStages20[CreateModuleStagesEnumType['metaData']],
      questions: createModuleStages20[CreateModuleStagesEnumType['questions']],
      summary,
    })

    if (
      createModuleStages45[CreateModuleStagesEnumType['questions']].isActive &&
      createModuleStages45[CreateModuleStagesEnumType['summary']].status ===
        CreateCourseStatusEnumType['success']
    )
      yield getCourse45QuestionsCreated()

    /* Add objections to courseCreateProgress */
    const stateSelected55: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages55 },
    } = stateSelected55

    if (
      createModuleStages55[CreateModuleStagesEnumType['objections']].isActive &&
      createModuleStages55[CreateModuleStagesEnumType['questions']].status ===
        CreateCourseStatusEnumType['success']
    )
      yield getCourse55ObjectionsCreated()

    /* Create course and module */
    const stateSelected60: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages60 },
    } = stateSelected60

    if (
      createModuleStages60[CreateModuleStagesEnumType['courseModule']]
        .isActive &&
      ((createModuleStages60[CreateModuleStagesEnumType['objections']]
        .isActive === true &&
        createModuleStages60[CreateModuleStagesEnumType['objections']]
          .status === CreateCourseStatusEnumType['success']) ||
        (createModuleStages60[CreateModuleStagesEnumType['objections']]
          .isActive === false &&
          createModuleStages60[CreateModuleStagesEnumType['questions']]
            .status === CreateCourseStatusEnumType['success']))
    )
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
