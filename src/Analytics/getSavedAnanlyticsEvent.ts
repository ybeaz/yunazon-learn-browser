import { store } from '../DataLayer/store'
import { actionAsync } from '../DataLayer/index.action'

import * as flags from '../FeatureFlags/index'
import { AzPropsType } from 'yourails_common'

export const getSavedAnanlyticsEvent: Function = (event: any, props: AzPropsType): void => {
  if (!flags.isGetingSavedAnanlyticsEvent()) return

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

  store.dispatch(actionAsync.SAVE_ANALYTICS.REQUEST(dataNext))
}
