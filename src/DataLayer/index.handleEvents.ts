import { ActionEventType, HandleEventType } from '../Interfaces/'

import * as handleEventsAll from './handlers'
// Causes error: import { PRINT_SCORES } from './handlers/PRINT_SCORES'

export const handleEvents: HandleEventType = (event: any, props: any) => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent || ''

  const handleEventsIn: Record<string, ActionEventType> = handleEventsAll

  handleEventsIn[type] && handleEventsIn[type](event, data)
}
