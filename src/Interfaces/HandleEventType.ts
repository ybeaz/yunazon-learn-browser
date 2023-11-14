import { HandleEventPropsType } from './HandleEventPropsType'

export interface HandleEventType {
  (event: any, props: HandleEventPropsType): void
}
