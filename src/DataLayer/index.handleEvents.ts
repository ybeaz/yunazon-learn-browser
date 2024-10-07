import type { ActionEventType, HandleEventType } from '../Interfaces/'

import * as handleEventsAll from './handlers'

const handleEvents: HandleEventType = (event: any, props: any) => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent || ''

  const handleEventsIn: Record<string, ActionEventType> = handleEventsAll

  handleEventsIn[type] && handleEventsIn[type](event, data)
}

export { handleEvents, ActionEventType, HandleEventType }
