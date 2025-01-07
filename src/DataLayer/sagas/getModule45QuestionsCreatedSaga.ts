import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from 'yourails_common'
import { CONNECTIONS_TIMEOUTS, ConnectionsTimeoutNameEnumType } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { getBotResponse, GetBotResponseParamsType } from './getBotResponseSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* getModule45QuestionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const { summary, summaryChunks }: any = yield select((state: RootStoreType) => {
      return {
        summary: state.moduleCreateProgress.summary,
        summaryChunks: state.moduleCreateProgress.summaryChunks,
      }
    })

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        timeCalculated: Array.isArray(summary)
          ? summaryChunks.length * CONNECTIONS_TIMEOUTS.summaryChunkToQuestions
          : null,
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    let questions: any[] = []
    let questionsChunks: any[][] = []
    let paramPrev = ''

    for (const summaryChunk of summaryChunks) {
      setTimeout(() => {
        const paramString = JSON.stringify(summaryChunk)
        if (paramPrev !== '' && paramPrev === paramString) {
          throw new Error(
            `getCourse35SummaryCreatedSaga [57] connection ${CreateModuleStagesEnumType['questions']} is timed out`
          )
        }
      }, CONNECTIONS_TIMEOUTS[ConnectionsTimeoutNameEnumType['summaryChunkToQuestions']] + 1500)

      const userText =
        typeof summaryChunk === 'string' ? summaryChunk : JSON.stringify(summaryChunk, null, 2)

      const getBotResponseParams: GetBotResponseParamsType = {
        botID: 'JeZ6xLpR2RSa',
        profileID: 'tbd3rgTVFkiU',
        profileName: '@t_q_ao_extractor_02_persona',
        stage: CreateModuleStagesEnumType['questions'],
        connectionsTimeoutName: ConnectionsTimeoutNameEnumType['summaryChunkToQuestions'],
        userText,
      }
      const questionsChunk: any = yield getBotResponse(getBotResponseParams)

      if (!Array.isArray(questionsChunk) || questionsChunk.length === 0)
        throw new Error(
          `getModule45QuestionsCreatedSaga [73] questionsChunk is not an array or array empty, ${JSON.stringify(
            questionsChunk
          )}`
        )

      questions = [...questions, ...questionsChunk.flat(12)]
      questionsChunks = [...questionsChunks, questionsChunk.flat(12)]
      paramPrev === JSON.stringify(summaryChunk)
    }

    if (questions.length === 0) {
      throw new Error(`getting questions step is failed`)
    }

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        questions,
      })
    )

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        questionsChunks,
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info('getModule45QuestionsCreatedSaga  [110] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule45QuestionsCreated = withDebounce(
  withTryCatchFinallySaga(getModule45QuestionsCreatedGenerator, {
    optionsDefault: { funcParent: 'getModule45QuestionsCreatedSaga' },
    resDefault: [],
  }),
  500
)

export default function* getModule45QuestionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_MODULE_QUESTIONS_CREATED.REQUEST().type],
    getModule45QuestionsCreated
  )
}
