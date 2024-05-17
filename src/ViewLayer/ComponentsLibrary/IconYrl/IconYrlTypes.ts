export type IconYrlPropsType = {
  classAdded: string
  icon?: string | null
  icon2?: string | null
  iconColor?: string
  icon2Color?: string
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type IconYrlPropsOutType = Record<string, any>

/**
 * @import import { IconYrlType } from './IconYrlType'
 */
export interface IconYrlComponentType extends React.FunctionComponent<IconYrlPropsType> {
  (props: IconYrlPropsType): React.ReactElement
}

export type IconYrlType = React.FunctionComponent<IconYrlPropsType>
