import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToCourses } from '../../Shared/getMappedConnectionToCourses'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'

export function* getCourses(params: ActionReduxType | any): Iterable<any> {
  const first = params.data?.first || 0
  const offset = params.data?.offset || 10

  const search = getParsedUrlQuery()

  const tagsPickStr = search?.tagspick
  const tagsPick = tagsPickStr
    ? tagsPickStr
        .split(' ')
        .filter((tag: string) => tag !== '')
        .join('')
        .split(',')
    : []

  const tagsOmitStr = search?.tagsomit
  const tagsOmit = tagsOmitStr
    ? tagsOmitStr
        .split(' ')
        .filter((tag: string) => tag !== '')
        .join('')
        .split(',')
    : []

  try {
    const variables = {
      readCoursesConnectionInput: {
        first,
        offset,
        stagesPick: selectCoursesStageFlag(),
        tagsPick,
        tagsOmit,
      },
    }
    const readCoursesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readCoursesConnection',
      },
      getHeadersAuthDict()
    )

    let coursesNext: any = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToCourses, { printRes: false })
      .exec(getPreparedCourses).result

    if (!coursesNext.length)
      getDeletedObjFromLocalStorage({ storeStateJson: {} })

    yield put(actionSync.SET_COURSES(coursesNext))

    const pageInfo = readCoursesConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({ paginationName: 'pagesCourses', ...pageInfo })
    )
  } catch (error: any) {
    console.info('getCourses.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getCoursesSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getCourses)
}
