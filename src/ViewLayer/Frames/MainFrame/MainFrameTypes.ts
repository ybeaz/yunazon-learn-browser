import { ReactElement } from 'react'

export type MainFrameComponentPropsType = {
  screenType?: string
  children: (ReactElement | null)[]
}

export type MainFramePropsType = Omit<
  MainFrameComponentPropsType,
  'storeStateSlice'
>

export type MainFramePropsOutType = Record<string, any>

/**
 * @import import { MainFrameType } from './MainFrameType'
 */
export interface MainFrameComponentType
  extends React.FunctionComponent<MainFrameComponentPropsType> {
  (props: MainFrameComponentPropsType): React.ReactElement
}

export type MainFrameType = React.NamedExoticComponent<MainFramePropsType>
