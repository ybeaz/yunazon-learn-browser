import { IRootStore } from '../../Interfaces/IRootStore'

export const TOGGLE_START_COURSE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isCourseStarted: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
