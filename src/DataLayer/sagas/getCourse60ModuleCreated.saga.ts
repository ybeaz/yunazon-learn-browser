import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateCoursesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'

import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getCourse60ModuleCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const { moduleCreateProgress, sub }: any = yield select(
      (state: RootStoreType) => {
        return {
          moduleCreateProgress: state.moduleCreateProgress,
          sub: state.authAwsCognitoUserData.sub,
        }
      }
    )

    const { metaData, questions, summary, objections } = moduleCreateProgress
    const {
      contentID,
      capture,
      description,
      duration,
      language: languageIn,
      tags,
      thumbnails,
    } = metaData

    const descriptionNext = summary.reduce(
      (accum: string, summaryItem: any) =>
        `${accum}${summaryItem?.capture ? ` ${summaryItem?.capture}.` : ''}`,
      ''
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    const variables: MutationCreateCoursesArgs = {
      createCoursesInput: [
        {
          profileID: sub,
          capture,
          description: descriptionNext,
          language: languageIn ? languageIn : 'en',
          isActive: true,
          meta: {
            institution: 'YouRails Academy',
            specTitle: "Sr. Specialist of the Registrar's Office",
            specName: 'Laurie Balton',
            email: 't3531350@yahoo.com',
            isSendingBcc: true,
            stages: ['production2023'],
            tags,
          },
          modules: [
            {
              index: 0,
              isActive: true,
              contentType: 'ytID',
              contentID,
              capture: `Модуль I. ${capture}`,
              duration,
              questionNumber: 6,
              passRate: 0.75,
              thumbnails,
              questions,
              summary,
              objections,
            },
          ],
        },
      ],
    }

    const createCourses: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createCourses',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts[ConnectionsTimeoutNameEnumType.standard],
      }
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        course: createCourses[0],
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse60ModuleCreated.saga [76] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse60ModuleCreated = withDebounce(
  getCourse60ModuleCreatedGenerator,
  500
)

export default function* getCourse60ModuleCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_META_DATA_CREATED.REQUEST().type],
    getCourse60ModuleCreated
  )
}
