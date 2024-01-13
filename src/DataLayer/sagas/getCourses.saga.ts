import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getCoursesGenerator(params: any): Iterable<any> {
  const profileIDtoFilter = params?.data?.profileIDtoFilter
  const profileIDs = profileIDtoFilter ? [profileIDtoFilter] : []
  console.info('getCourses.saga [20]', {
    profileIDs,
    profileIDtoFilter,
    params,
  })

  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )

  const {
    componentsState: {
      pagination: {
        pagesCourses: { first, offset },
      },
    },
    forms: { inputSearch, tagsPick, tagsOmit },
  } = stateSelected as RootStoreType

  let readCoursesConnectionInput: any = {
    first,
    offset,
    profileIDs,
    searchPhrase: inputSearch,
    tagsPick,
    tagsOmit,
    stagesPick: selectCoursesStageFlag(),
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
      .exec(getPreparedCourses).result

    yield put(actionSync.SET_COURSES(coursesNext))

    const pageInfo = readCoursesConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({ paginationName: 'pagesCourses', ...pageInfo })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info(
      'getCourses.saga [77] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourses = withDebounce(getCoursesGenerator, 500)

export default function* getCoursesSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getCourses)
}
