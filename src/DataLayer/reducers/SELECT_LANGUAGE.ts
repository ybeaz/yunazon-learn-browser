import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_LANGUAGE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  return { ...store, language: data }
}
