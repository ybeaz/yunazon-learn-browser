import React, { ReactElement } from 'react'

export type MainFramePropsType = {
  screenType?: string
  children: (ReactElement | null)[]
}

export const MainFrame: React.FunctionComponent<MainFramePropsType> = props => {
  const { screenType } = props

  const classAdded = screenType ? `MainFrame_${screenType}` : ''

  return (
    <div className={`MainFrame ${classAdded}`}>
      <div className='__header'>{props.children[0]}</div>
      <div className='__middle'>
        <div className='_left'>{props.children[1]}</div>
        <div className='_main'>
          <div className='_wrapper'>{props.children[2]}</div>
        </div>
        <div className='_right'>{props.children[3]}</div>
      </div>
      <div className='__comments'>
        <div className='_in'></div>
      </div>
      <div className='__footer'>{props.children[4]}</div>
    </div>
  )
}
