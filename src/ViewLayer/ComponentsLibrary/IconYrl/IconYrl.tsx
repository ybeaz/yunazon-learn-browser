import React from 'react'
import { IconContext } from 'react-icons'

import { ICONS } from '../../../Constants/icons.const'

interface IconYrlArgs {
  classAdded: string
  icon?: string
  icon2?: string
}

import {
  IconYrlPropsType,
  IconYrlPropsOutType,
  IconYrlComponentType,
  IconYrlType,
} from './IconYrlTypes'

/**
 * @description Component to render IconYrl
 * @import import { IconYrl, IconYrlPropsType, IconYrlPropsOutType, IconYrlType } 
             from '../Components/IconYrl/IconYrl/IconYrl'
 */
const IconYrlComponent: IconYrlComponentType = (props: IconYrlPropsType) => {
  const { icon = '', icon2 = '', classAdded } = props

  // @ts-ignore
  const Icon: any = ICONS[icon]
  // @ts-ignore
  const Icon2: any = ICONS[icon2]

  const propsOut: IconYrlPropsOutType = {}

  return (
    <>
      {Icon && (
        <div className={`IconYrl ${classAdded}`}>
          <IconContext.Provider
            value={{
              className: `_icon`,
            }}
          >
            <Icon />
          </IconContext.Provider>
          {Icon2 && (
            <IconContext.Provider
              value={{
                className: `_icon`,
              }}
            >
              <Icon2 />
            </IconContext.Provider>
          )}
        </div>
      )}
    </>
  )
}

export const IconYrl: IconYrlType = React.memo(IconYrlComponent)

export type {
  IconYrlPropsType,
  IconYrlPropsOutType,
  IconYrlComponentType,
  IconYrlType,
}
