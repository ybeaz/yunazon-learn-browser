import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getCourseS40QuestionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add questions to courseCreateProgress 
        botID: 'l3Yg9sxlhbyKEJ5uzT1Sx',
        profileID: 'iGlg3wRNvsQEIYF5L5svE',
        profileName: '@t_q_ao_extractor_persona',
    */
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    const variables = {
      createContentMetaDataInput: {
        originUrl: inputCourseCreate,
      },
    }

    console.info('getCourseS40QuestionsCreated.saga [33]', {
      variables,
    })

    const createContentMetaData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createContentMetaData',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    console.info('getCourseS40QuestionsCreated.saga [49]', {
      createContentMetaData,
      inputCourseCreate,
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        metaData: createContentMetaData,
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseS40QuestionsCreated.saga [44] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS40QuestionsCreated = withDebounce(
  getCourseS40QuestionsCreatedGenerator,
  500
)

export default function* getCourseS40QuestionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_QUESTIONS_CREATED.REQUEST().type],
    getCourseS40QuestionsCreated
  )
}
