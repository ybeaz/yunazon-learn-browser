import { HandleEventType } from '../Interfaces/HandleEventType'
import { ActionEventType } from '../Interfaces/ActionEventType'

import * as HandleEvents from './handlers'
// Causes error: import { PRINT_SCORES } from './handlers/PRINT_SCORES'

export const handleEvents = (event: any, props: any) => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent || ''

  const handleEvents: Record<string, ActionEventType> = HandleEvents

  handleEvents[type] && handleEvents[type](event, data)
}
