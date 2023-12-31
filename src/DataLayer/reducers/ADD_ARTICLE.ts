import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'

export const ADD_ARTICLE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { articles } = store

  let articlesNext = articles
  const articleFound = articles.find(
    (article: any) => article.articleID === data.articleID
  )
  if (!articleFound) {
    articlesNext = [...articles, data]
  }

  return {
    ...store,
    articles: articlesNext,
  }
}
