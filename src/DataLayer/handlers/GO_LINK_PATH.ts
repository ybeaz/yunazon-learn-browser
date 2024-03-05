import { ActionEventType } from '../../Interfaces/ActionEventType'

export const GO_LINK_PATH: ActionEventType = async (
  event,
  { navigate, pathname }: Record<'navigate' | 'pathname', any> = {
    navigate: () => {},
    pathname: '',
  }
) => {
  try {
    await navigate(pathname)
  } catch (error) {
    console.error(error)
  }
}
