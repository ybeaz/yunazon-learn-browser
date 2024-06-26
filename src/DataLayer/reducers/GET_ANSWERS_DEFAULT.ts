import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProvidedAnswerDefault } from '../../Shared/getProvidedAnswerDefault'

export const GET_ANSWERS_DEFAULT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { modules } = store
  let modulesNext = getProvidedAnswerDefault(modules)
  modulesNext = getOptionsShuffled(modulesNext)
  return { ...store, modules: modulesNext }
}
