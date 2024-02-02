import { takeEvery, put, select, delay } from 'redux-saga/effects'

import {
  RootStoreType,
  ActionReduxType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from '../../Shared/withDebounce'
import { getCourse10MataDataCreated } from './getCourse10MataDataCreatedSaga'
import { getCourse20TranscriptCreated } from './getCourse20TranscriptCreatedSaga'
import { getCourse35SummaryCreated } from './getCourse35SummaryCreatedSaga'
import { getCourse45QuestionsCreated } from './getCourse45QuestionsCreatedSaga'
import { getCourse55ObjectionsCreated } from './getCourse55ObjectionsCreatedSaga'
import { getCourse60ModuleCreated } from './getCourse60ModuleCreatedSaga'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        originUrl: '',
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

    /* Add originUri to moduleCreateProgress */
    /* Add metaData to moduleCreateProgress */
    const stateSelected10: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages10 },
    } = stateSelected10

    if (createModuleStages10[CreateModuleStagesEnumType['metaData']].isActive)
      yield getCourse10MataDataCreated()

    /* Add transcript to moduleCreateProgress */
    const stateSelected20: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages20 },
    } = stateSelected20

    if (
      createModuleStages20[CreateModuleStagesEnumType['transcript']].isActive &&
      createModuleStages20[CreateModuleStagesEnumType['metaData']].status ===
        CreateModuleStatusEnumType['success']
    )
      yield getCourse20TranscriptCreated()

    /* Add summary to moduleCreateProgress */
    const stateSelected35: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages35 },
    } = stateSelected35

    if (
      createModuleStages35[CreateModuleStagesEnumType['summary']].isActive &&
      createModuleStages35[CreateModuleStagesEnumType['transcript']].status ===
        CreateModuleStatusEnumType['success']
    )
      yield getCourse35SummaryCreated()

    /* Add questions to moduleCreateProgress */
    const stateSelected45: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages45, summary },
    } = stateSelected45

    if (
      createModuleStages45[CreateModuleStagesEnumType['questions']].isActive &&
      createModuleStages45[CreateModuleStagesEnumType['summary']].status ===
        CreateModuleStatusEnumType['success']
    )
      yield getCourse45QuestionsCreated()

    /* Add objections to moduleCreateProgress */
    const stateSelected55: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
    const {
      componentsState: { createModuleStages: createModuleStages55 },
    } = stateSelected55

    if (
      createModuleStages55[CreateModuleStagesEnumType['objections']].isActive &&
      createModuleStages55[CreateModuleStagesEnumType['questions']].status ===
        CreateModuleStatusEnumType['success']
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
          .status === CreateModuleStatusEnumType['success']) ||
        (createModuleStages60[CreateModuleStagesEnumType['objections']]
          .isActive === false &&
          createModuleStages60[CreateModuleStagesEnumType['questions']]
            .status === CreateModuleStatusEnumType['success']))
    )
      yield getCourse60ModuleCreated()
  } catch (error: any) {
    console.info(
      'getCourseCreatedSaga [37] ERROR',
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
