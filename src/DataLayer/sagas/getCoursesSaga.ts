import { takeEvery, put, select } from 'redux-saga/effects'

import {
  ReadCoursesConnectionInputType,
  QueryReadCoursesConnectionArgs,
} from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { RootStoreType, PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getCoursesGenerator(params: ActionReduxType | any): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      pagination: {
        pageModules: { first, offset },
      },
    },
    forms: { coursesSearch, tagsPick, tagsOmit },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let profileIDs: string[] = []
  if (screenActive === 'MyModules' && sub) profileIDs = [sub]
  else if (screenActive === 'MyModules' && !sub) {
    return
  }

  let readCoursesConnectionInput: ReadCoursesConnectionInputType = {
    first,
    offset,
    profileIDs,
    searchPhrase: coursesSearch,
    tagsPick,
    tagsOmit,
    sort: { prop: 'dateCreated', direction: -1 },
    isActive: true,
  }

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))

    const variables: QueryReadCoursesConnectionArgs = {
      readCoursesConnectionInput,
    }

    const readCoursesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['readCoursesConnection'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    let coursesNext: any = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToItems, { printRes: false })
      .exec(getPreparedCourses).result

    yield put(actionSync.SET_COURSES(coursesNext))

    const pageInfo = readCoursesConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({
        paginationName: PaginationNameEnumType['pageModules'],
        ...pageInfo,
      })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getCoursesSaga [77] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getCourses = withDebounce(getCoursesGenerator, 500)

export default function* getCoursesSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getCourses)
}
