import { IRootStore } from './IRootStore'

export interface ReducerType {
  (store: IRootStore, data: any): IRootStore
}
