import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

export const SET_TAGS_STATE: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { queryUrl: query, forms } = store

  const tagsPick = (query && query?.tagsPick && query?.tagsPick.split(',')) || []
  const tagsOmit = (query && query?.tagsOmit && query?.tagsOmit.split(',')) || []

  const { tagsPick: tagsPickState, tagsOmit: tagsOmitState } = forms

  let tagsPickNext = tagsPickState
  let tagsOmitNext = tagsOmitState

  if (tagsPick) tagsPickNext = tagsPick
  if (tagsOmit) tagsOmitNext = tagsOmit

  console.info('SET_TAGS_STATE reducer [19]', { tagsPickNext, tagsPick, tagsPickState })

  const formsNext = { ...forms, tagsPick: tagsPickNext, tagsOmit: tagsOmitNext }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsPick',
    searchParamsValue: (tagsPick && tagsPick.length && tagsPick.join(',')) || undefined,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  const getSetUrlQueryBrowserApiParams2: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsOmit',
    searchParamsValue: (tagsOmit && tagsOmit.length && tagsOmit.join(',')) || undefined,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams2)

  return { ...store, forms: formsNext }
}
