import { store } from '../../DataLayer/store'
import * as action from '../../DataLayer/index.action'

export const getSavedAnanlyticsEvent: Function = (
  event: any,
  props: any
): void => {
  const { type, name, value: valueIn, level } = props
  const { hostname, pathname } = location
  const dataNext: any = {
    event: {
      type,
      ...(name && { name }),
      ...((valueIn || event?.target?.value) && {
        value: valueIn || event?.target?.value,
      }),
      ...(level && { level }),
      pathname,
    },
  }

  store.dispatch(action.SAVE_ANALYTICS.REQUEST(dataNext))
}
