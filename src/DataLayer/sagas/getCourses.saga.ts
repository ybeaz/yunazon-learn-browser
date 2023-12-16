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
import { getLocalStorageStoreStateRead } from '../../Shared/getLocalStorageStoreStateRead'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'

export function* getCourses(params: ActionReduxType | any): Iterable<any> {
  const storeStateLocalStorage = getLocalStorageStoreStateRead()
  const firstLocalStorage =
    storeStateLocalStorage?.componentsState?.pagination?.pagesCourses?.first

  const search = getParsedUrlQuery()
  const urlFirst = search?.first
  const urlOffset = search?.offset
  const urlLanguage = search?.lang
  const urlSearchPhrase = search?.search

  const urlTagsPickStr = search?.tagspick
  const urlTagsPick = urlTagsPickStr
    ? urlTagsPickStr
        .split(' ')
        .filter((tag: string) => tag !== '')
        .join('')
        .split(',')
    : []

  const urlTagsOmitStr = search?.tagsomit
  const urlTagsOmit = urlTagsOmitStr
    ? urlTagsOmitStr
        .split(' ')
        .filter((tag: string) => tag !== '')
        .join('')
        .split(',')
    : []

  let readCoursesConnectionInput: any = {
    first: 0,
    offset: 10,
    stagesPick: selectCoursesStageFlag(),
  }

  if (urlFirst) readCoursesConnectionInput.first = urlFirst
  if (urlOffset) readCoursesConnectionInput.first = urlOffset
  if (urlLanguage) readCoursesConnectionInput.language = urlLanguage
  if (urlSearchPhrase) readCoursesConnectionInput.searchPhrase = urlSearchPhrase
  if (urlTagsPick && urlTagsPick.length)
    readCoursesConnectionInput.tagsPick = urlTagsPick
  if (urlTagsOmit && urlTagsOmit.length)
    readCoursesConnectionInput.tagsPick = urlTagsOmit

  yield put(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pagesCourses'],
      first: readCoursesConnectionInput.first,
    })
  )

  try {
    const variables = {
      readCoursesConnectionInput,
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
