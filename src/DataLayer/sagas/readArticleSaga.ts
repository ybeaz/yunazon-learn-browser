import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from 'yourails_common'
import { articles } from '../../ContentMock/articlesMock'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* readArticleGenerator(params: ActionReduxType | any): Iterable<any> {
  const { data: articleID } = params

  let articleNext: any = articles.find((article: any) => article.articleID === articleID)

  yield put(actionSync.SET_ARTICLES([articleNext]))
}

export const readArticle = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(readArticleGenerator), {
    optionsDefault: { funcParent: 'readArticleSaga' },
    resDefault: [],
  }),
  500
)

export default function* readArticleSaga() {
  yield takeEvery([actionAsync.FIND_ARTICLE.REQUEST().type], readArticle)
}
