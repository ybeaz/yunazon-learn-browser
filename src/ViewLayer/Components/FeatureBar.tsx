import React from 'react'

import { IconContext } from 'react-icons'
import { BsSquareFill, BsSquareHalf, BsSquare } from 'react-icons/bs'

const ICON = {
  BsSquareFill,
  BsSquareHalf,
  BsSquare,
}

export const FeatureBar: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { icon, number, total } = props
  const Icon = ICON[icon]

  return (
    <div className='FeatureBar'>
      <div className='__group'>
        <div className={`_item`}>
          <IconContext.Provider
            value={{
              className: `_icon`,
            }}
          >
            <Icon />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
