import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { getPreparedModules } from '../../Shared/getPreparedModules'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getModulesGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )

  const {
    componentsState: {
      screenActive,
      pagination: {
        pageCourses: { first, offset },
      },
    },
    forms: { inputSearch, tagsPick, tagsOmit },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let profileIDs: string[] = []
  if (screenActive === 'MyCourses' && sub) profileIDs = [sub]
  else if (screenActive === 'MyCourses' && !sub) {
    return
  }

  let readCoursesConnectionInput: any = {
    first,
    offset,
    profileIDs,
    searchPhrase: inputSearch,
    tagsPick,
    tagsOmit,
    stagesPick: [],
    sort: { prop: 'dateCreated', direction: -1 },
  }

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))

    const variables = {
      readCoursesConnectionInput,
    }

    const readCoursesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readCoursesConnection',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    let coursesNext: any = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToItems, { printRes: false })
      .exec(getPreparedModules).result

    yield put(actionSync.SET_COURSES(coursesNext))

    const pageInfo = readCoursesConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({ paginationName: 'pageCourses', ...pageInfo })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info(
      'getModules.saga [77] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getModules = withDebounce(getModulesGenerator, 500)

export default function* getModulesSaga() {
  yield takeEvery([actionAsync.GET_MODULES.REQUEST().type], getModules)
}
