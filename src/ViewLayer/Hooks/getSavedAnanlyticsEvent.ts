import { handleEvents } from './handleEvents'

export const getSavedAnanlyticsEvent = ({
  type = undefined,
  name = undefined,
  value = undefined,
  level = undefined,
}) => {
  const saveAnalyticsEvent = {
    type: 'SAVE_ANALYTICS_EVENT',
    data: { type, name, value, level },
  }

  return handleEvents({}, saveAnalyticsEvent)
}
