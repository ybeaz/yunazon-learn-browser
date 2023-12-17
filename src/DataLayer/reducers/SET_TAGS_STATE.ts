import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

export const SET_TAGS_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { tagsPick: tagsPickState, tagsOmit: tagsOmitState } = forms

  const { tagsPick, tagsOmit } = data

  let tagsPickNext = tagsPickState
  let tagsOmitNext = tagsOmitState

  if (tagsPick && tagsPick.length) tagsPickNext = tagsPick
  if (tagsOmit && tagsOmit.length) tagsOmitNext = tagsOmit

  const formsNext = { ...forms, tagsPick: tagsPickNext, tagsOmit: tagsOmitNext }

  return { ...store, forms: formsNext }
}
