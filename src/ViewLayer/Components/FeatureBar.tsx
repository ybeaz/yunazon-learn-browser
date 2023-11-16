import React, { ReactElement, JSXElementConstructor } from 'react'
import { nanoid } from 'nanoid'

import { IconContext } from 'react-icons'
import { BsSquareFill, BsSquareHalf, BsSquare } from 'react-icons/bs'

const ICON: Record<string, any> = {
  BsSquareFill,
  BsSquareHalf,
  BsSquare,
}

export type FeatureBarPropsType = {
  number: number
  total: number
  iconMain: string
  iconHalf: string
  iconRest: string
  tooltipText: string
  tooltipPosition: string
}

export const FeatureBar: React.FunctionComponent<FeatureBarPropsType> = (
  props: FeatureBarPropsType
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

  const classTooltipAdd: string | undefined = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }[tooltipPosition]

  const IconMain: ReactElement = ICON[iconMain]
  const IconHalf: ReactElement = ICON[iconHalf]
  const IconRest: ReactElement = ICON[iconRest]

  const getIcons = (
    number: number,
    total: number,
    IconMain: ReactElement,
    IconHalf: ReactElement,
    IconRest: ReactElement
  ): ReactElement => {
    const icons = new Array(total).fill('true').map((item, index) => {
      let Icon: ReactElement = IconRest
      const base = total - index - 1
      if (base >= number) Icon = IconRest
      else if (base === Math.floor(number)) Icon = IconHalf
      else Icon = IconMain

      const key = nanoid()

      return (
        <div key={key} className={`_item`}>
          <IconContext.Provider
            value={{
              className: `_icon`,
            }}
          >
            {/* @ts-expect-error */}
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
