import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'

export const SELECT_SKILLS_REQ_LANG: ActionEventType = (event, data) => {
  const arrSelected =
    event.target.selectedOptions &&
    Array.from(event.target.selectedOptions, (option: any) => option.value)

  console.info('SELECT_SKILLS_REQ_LANG [15]', {
    data,
    arrSelected,
  })
}
