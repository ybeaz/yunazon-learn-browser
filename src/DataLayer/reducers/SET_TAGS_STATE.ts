import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'

export const SET_TAGS_STATE: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const queryUrl = getParsedUrlQueryBrowserApi()

  const { componentsState } = store

  const tagsPickQuery = (queryUrl && queryUrl?.tagsPick && queryUrl?.tagsPick.split(',')) || []
  const tagsOmitQuery = (queryUrl && queryUrl?.tagsOmit && queryUrl?.tagsOmit.split(',')) || []

  const { tagsPick: tagsPickState, tagsOmit: tagsOmitState } = componentsState

  let tagsPickNext = tagsPickState
  let tagsOmitNext = tagsOmitState

  if (tagsPickQuery) tagsPickNext = tagsPickQuery
  if (tagsOmitQuery) tagsOmitNext = tagsOmitQuery

  const componentsStateNext = { ...componentsState, tagsPick: tagsPickNext, tagsOmit: tagsOmitNext }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsPick',
    searchParamsValue: (tagsPickNext && tagsPickNext.length && tagsPickNext.join(',')) || undefined,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  const getSetUrlQueryBrowserApiParams2: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsOmit',
    searchParamsValue: (tagsOmitNext && tagsOmitNext.length && tagsOmitNext.join(',')) || undefined,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams2)

  return { ...store, componentsState: componentsStateNext }
}
