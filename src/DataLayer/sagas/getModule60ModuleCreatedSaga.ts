import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateModulesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getArrayItemByProp } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getModule60ModuleCreatedGenerator(params: ActionReduxType | any): Iterable<any> {
  try {
    const { moduleCreateProgress, sub, profiles }: any = yield select((state: RootStoreType) => {
      return {
        moduleCreateProgress: state.moduleCreateProgress,
        sub: state.authAwsCognitoUserData.sub,
        profiles: state.profiles,
      }
    })

    const profile = getArrayItemByProp({
      arr: profiles,
      propName: 'userID',
      propValue: sub,
    })

    const { metaData, transcriptList, questions, summary, objections } = moduleCreateProgress
    const { contentID, capture, description, duration, language, tags, thumbnails } = metaData

    const descriptionNext = summary.reduce(
      (accum: string, summaryItem: any) =>
        `${accum}${summaryItem?.capture ? ` ${summaryItem?.capture}.` : ''}`,
      ''
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    const variables: MutationCreateModulesArgs = {
      createModulesInput: [
        {
          creatorID: profile?.profileID,
          organizationID: '1___oooOOOooo000',
          capture,
          description: descriptionNext,
          language: language ? language : 'en',
          isActive: true,
          index: 0,
          contentType: 'ytID',
          contentID,
          duration,
          questionNumber: 6,
          tags: tags || [],
          passRate: 0.75,
          thumbnails,
          questions,
          summary,
          objections,
          transcriptList,
        },
      ],
    }

    const createCourses: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['createModules'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts[ConnectionsTimeoutNameEnumType.standard],
      }
    )

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        course: createCourses[0],
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info('getModule60ModuleCreatedSaga [76] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule60ModuleCreated = withDebounce(getModule60ModuleCreatedGenerator, 500)

export default function* getModule60ModuleCreatedSaga() {
  yield takeEvery([actionAsync.GET_MODULE_CREATED.REQUEST().type], getModule60ModuleCreated)
}
