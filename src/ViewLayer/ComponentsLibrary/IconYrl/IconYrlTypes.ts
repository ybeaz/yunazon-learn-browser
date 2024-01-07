export type IconYrlPropsType = {
  classAdded: string
  icon?: string
  icon2?: string
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type IconYrlPropsOutType = Record<string, any>

/**
 * @import import { IconYrlType } from './IconYrlType'
 */
export interface IconYrlComponentType
  extends React.FunctionComponent<IconYrlPropsType> {
  (props: IconYrlPropsType): React.ReactElement
}

export type IconYrlType = React.FunctionComponent<IconYrlPropsType>
