import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffled } from 'yourails_common'
import { getProvidedAnswerDefault } from 'yourails_common'

export const GET_ANSWERS_DEFAULT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { modules } = store
  let modulesNext = getProvidedAnswerDefault(modules)
  modulesNext = getOptionsShuffled(modulesNext)
  return { ...store, modules: modulesNext }
}
