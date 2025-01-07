import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { ActionReduxType, withDebounce } from 'yourails_common'
import { getModule10MetaDataCreated } from './getModule10MetaDataCreatedSaga'
import { getModule20TranscriptCreated } from './getModule20TranscriptCreatedSaga'
import { getModule35SummaryCreated } from './getModule35SummaryCreatedSaga'
import { getModule45QuestionsCreated } from './getModule45QuestionsCreatedSaga'
import { getModule55ObjectionsCreated } from './getModule55ObjectionsCreatedSaga'
import { getModule60ModuleCreated } from './getModule60ModuleCreatedSaga'
import { createSiteMap } from './createSiteMapSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* getModuleScenarioGenerator(params: ActionReduxType | any): Iterable<any> {
  yield put(
    actionSync.ADD_MODULE_CREATE_DATA({
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
  const stateSelected10: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages10 },
  } = stateSelected10

  if (createModuleStages10[CreateModuleStagesEnumType['metaData']].isActive)
    yield getModule10MetaDataCreated()

  /* Add transcript to moduleCreateProgress */
  const stateSelected20: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages20 },
  } = stateSelected20

  if (
    createModuleStages20[CreateModuleStagesEnumType['transcript']].isActive &&
    createModuleStages20[CreateModuleStagesEnumType['metaData']].status ===
      CreateModuleStatusEnumType['success']
  )
    yield getModule20TranscriptCreated()

  /* Add summary to moduleCreateProgress */
  const stateSelected35: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages35 },
  } = stateSelected35

  if (
    createModuleStages35[CreateModuleStagesEnumType['summary']].isActive &&
    createModuleStages35[CreateModuleStagesEnumType['transcript']].status ===
      CreateModuleStatusEnumType['success']
  )
    yield getModule35SummaryCreated()

  /* Add questions to moduleCreateProgress */
  const stateSelected45: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages45, summary },
  } = stateSelected45

  if (
    createModuleStages45[CreateModuleStagesEnumType['questions']].isActive &&
    createModuleStages45[CreateModuleStagesEnumType['summary']].status ===
      CreateModuleStatusEnumType['success']
  )
    yield getModule45QuestionsCreated()

  /* Add objections to moduleCreateProgress */
  const stateSelected55: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages55 },
  } = stateSelected55

  if (
    createModuleStages55[CreateModuleStagesEnumType['objections']].isActive &&
    createModuleStages55[CreateModuleStagesEnumType['questions']].status ===
      CreateModuleStatusEnumType['success']
  )
    yield getModule55ObjectionsCreated()

  /* Create course and module */
  const stateSelected60: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages60 },
  } = stateSelected60

  if (
    createModuleStages60[CreateModuleStagesEnumType['courseModule']].isActive &&
    ((createModuleStages60[CreateModuleStagesEnumType['objections']].isActive === true &&
      createModuleStages60[CreateModuleStagesEnumType['objections']].status ===
        CreateModuleStatusEnumType['success']) ||
      (createModuleStages60[CreateModuleStagesEnumType['objections']].isActive === false &&
        createModuleStages60[CreateModuleStagesEnumType['questions']].status ===
          CreateModuleStatusEnumType['success']))
  )
    yield getModule60ModuleCreated()

  yield createSiteMap()
}

export const getModuleScenario = withDebounce(
  withTryCatchFinallySaga(getModuleScenarioGenerator, {
    optionsDefault: { funcParent: 'getModuleScenarioSaga' },
    resDefault: [],
  }),
  500
)

export default function* getModuleScenarioSaga() {
  yield takeEvery([actionAsync.GET_MODULE_SCENARIO.REQUEST().type], getModuleScenario)
}
