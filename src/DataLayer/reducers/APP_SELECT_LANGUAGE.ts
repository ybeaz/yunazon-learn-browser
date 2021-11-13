import { IRootStore } from '../../Interfaces/IRootStore'

export const APP_SELECT_LANGUAGE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  return { ...store, language: data }
}
