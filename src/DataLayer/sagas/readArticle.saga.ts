import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToCourses } from '../../Shared/getMappedConnectionToCourses'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'

import { articles } from '../../ContentMock/articlesMock'

export function* readArticleGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const { data: articleID } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    let articleNext: any = articles.find(
      (article: any) => article.articleID === articleID
    )

    yield put(actionSync.ADD_ARTICLE(articleNext))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readArticle.saga  [44]', error.name + ': ' + error.message)
  }
}

export const readArticle = withDebounce(readArticleGenerator, 500)

export default function* readArticleSaga() {
  yield takeEvery([actionAsync.FIND_ARTICLE.REQUEST().type], readArticle)
}
