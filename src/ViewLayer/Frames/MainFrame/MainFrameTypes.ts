import { ReactElement } from 'react'

export type MainFramePropsType = {
  screenType?: string
  children: (ReactElement | null)[]
}

export type MainFramePropsOutType = Record<string, any>

/**
 * @import import { MainFrameType } from './MainFrameType'
 */
export interface MainFrameComponentType
  extends React.FunctionComponent<MainFramePropsType> {
  (props: MainFramePropsType): React.ReactElement
}

export type MainFrameType = React.FunctionComponent<MainFramePropsType>
