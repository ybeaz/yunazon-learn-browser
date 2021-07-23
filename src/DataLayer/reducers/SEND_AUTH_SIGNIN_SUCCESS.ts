import { IRootStore } from '../../Interfaces/IRootStore'

export const SEND_AUTH_SIGNIN_SUCCESS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const userNext = data
  return { ...store, user: userNext }
}
