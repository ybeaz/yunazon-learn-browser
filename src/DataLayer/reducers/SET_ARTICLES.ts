import { ArticleType } from '../../@types/ArticleMockType'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrBy } from '../../Shared/getUniqArrBy'

export const SET_ARTICLES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { articles } = store
  const articlesNext = getUniqArrBy(
    ['articleID'],
    [...data, ...articles]
  ).filter((article: ArticleType) => article.isActive === true)

  return {
    ...store,
    articles: articlesNext,
  }
}
