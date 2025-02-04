import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from 'yourails_common'
import { CONNECTIONS_TIMEOUTS, ConnectionsTimeoutNameEnumType } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { getBotResponse, GetBotResponseParamsType } from './getBotResponseSaga'
import { getChunkedArray } from 'yourails_common'
import { CHUNKS_FROM_SUMMARY_ARRAY_FOR_QUESTIONS } from 'yourails_common'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* getModule35SummaryCreatedGenerator(params: ActionReduxType | any): Iterable<any> {
  try {
    const transcriptChunks: any = yield select((state: RootStoreType) => {
      return state.moduleCreateProgress.transcriptChunks
    })

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        timeCalculated: Array.isArray(transcriptChunks)
          ? transcriptChunks.length * CONNECTIONS_TIMEOUTS.transcriptChunkToSummary
          : null,
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    let summary: any[] = []
    let paramPrev = ''

    for (const transcriptChunk of transcriptChunks) {
      setTimeout(() => {
        const paramString = JSON.stringify(transcriptChunk)
        if (paramPrev !== '' && paramPrev === paramString) {
          throw new Error(
            `getModule35SummaryCreatedSaga [57] connection ${CreateModuleStagesEnumType['summary']} is timed out`
          )
        }
      }, CONNECTIONS_TIMEOUTS[ConnectionsTimeoutNameEnumType['transcriptChunkToSummary']] + 1500)

      const getBotResponseParams: GetBotResponseParamsType = {
        botID: 'yg2vQJbWulaU',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
        stage: CreateModuleStagesEnumType['summary'],
        connectionsTimeoutName: ConnectionsTimeoutNameEnumType['transcriptChunkToSummary'],
        userText: transcriptChunk,
      }
      const summaryItem: any = yield getBotResponse(getBotResponseParams)

      summary = [...summary, ...summaryItem.flat(12)]
      paramPrev === JSON.stringify(transcriptChunk)
    }

    if (summary.length === 0) {
      throw new Error(`getting summary step is failed`)
    }

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        summary,
      })
    )

    const summaryChunks: string[][] = getChunkedArray(
      summary,
      CHUNKS_FROM_SUMMARY_ARRAY_FOR_QUESTIONS
    )

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        summaryChunks,
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info('getModule35SummaryCreatedSaga  [110] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule35SummaryCreated = withDebounce(
  withTryCatchFinallySaga(getModule35SummaryCreatedGenerator, {
    optionsDefault: { funcParent: 'getModule35SummaryCreatedSaga' },
    resDefault: [],
  }),
  500
)

export default function* getModule35SummaryCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_MODULE_SUMMARY_CREATED.REQUEST().type],
    getModule35SummaryCreated
  )
}
