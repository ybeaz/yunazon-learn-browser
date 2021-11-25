import React, { ReactElement } from 'react'

import { IconContext } from 'react-icons'
import { BsSquareFill, BsSquareHalf, BsSquare } from 'react-icons/bs'

const ICON = {
  BsSquareFill,
  BsSquareHalf,
  BsSquare,
}

export const FeatureBar: React.FunctionComponent<any> = (
  props: any
): ReactElement => {
  const {
    number = 2.5,
    total = 5,
    iconMain = 'BsSquareFill',
    iconHalf = 'BsSquareHalf',
    iconRest = 'BsSquare',
    tooltipText = 'сложность',
    tooltipPosition = 'bottom',
  } = props

  const classTooltipAdd = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }[tooltipPosition]

  const IconMain = ICON[iconMain]
  const IconHalf = ICON[iconHalf]
  const IconRest = ICON[iconRest]

  const getIcons: Function = (
    number,
    total,
    IconMain,
    IconHalf,
    IconRest
  ): ReactElement => {
    const icons = new Array(total).fill('true').map((item, index) => {
      let Icon = IconRest
      const base = total - index - 1
      if (base >= number) Icon = IconRest
      else if (base === Math.floor(number)) Icon = IconHalf
      else Icon = IconMain

      return (
        <div className={`_item`}>
          <IconContext.Provider
            value={{
              className: `_icon`,
            }}
          >
            <Icon />
          </IconContext.Provider>
        </div>
      )
    })
    return <div className='__group'>{icons}</div>
  }

  return (
    <div className='FeatureBar'>
      <span className={`__tooltipText ${classTooltipAdd}`}>{tooltipText}</span>
      {getIcons(number, total, IconMain, IconHalf, IconRest)}
    </div>
  )
}
