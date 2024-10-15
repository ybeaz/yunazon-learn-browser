import { ArticleItemType } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrBy } from 'yourails_common'

/**
 * TODO: Not ready for production
 */
export const SET_ARTICLES: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { articles } = store
  const articlesNext = getUniqArrBy(['articleID'], [...data, ...articles]).filter(
    (article: ArticleItemType) => article
  )

  return {
    ...store,
    articles: articlesNext,
  }
}
