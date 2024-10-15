import { store } from '../store'
import { ActionEventType } from 'yourails_common'

export const SELECT_SKILLS_REQ: ActionEventType = (event, data) => {
  const arrSelected =
    event.target.selectedOptions &&
    Array.from(event.target.selectedOptions, (option: any) => option.value)

  console.info('SELECT_SKILLS_REQ [15]', {
    data,
    arrSelected,
  })
}
