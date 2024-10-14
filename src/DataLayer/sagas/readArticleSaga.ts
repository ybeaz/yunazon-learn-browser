import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from 'yourails_common'

import { articles } from '../../ContentMock/articlesMock'

export function* readArticleGenerator(params: ActionReduxType | any): Iterable<any> {
  const { data: articleID } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    let articleNext: any = articles.find((article: any) => article.articleID === articleID)

    yield put(actionSync.SET_ARTICLES([articleNext]))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readArticleSaga [33] ERROR', `${error.name}: ${error.message}`)
  }
}

export const readArticle = withDebounce(readArticleGenerator, 500)

export default function* readArticleSaga() {
  yield takeEvery([actionAsync.FIND_ARTICLE.REQUEST().type], readArticle)
}
