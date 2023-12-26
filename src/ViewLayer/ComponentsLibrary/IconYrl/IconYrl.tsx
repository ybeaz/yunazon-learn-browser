import React from 'react'
import { IconContext } from 'react-icons'

import { getClasses } from '../../../Shared/getClasses'

import { ICONS } from './iconsYrl.const'

import {
  IconYrlPropsType,
  IconYrlPropsOutType,
  IconYrlComponentType,
  IconYrlType,
} from './IconYrlTypes'

/**
 * @description Component to render IconYrl
 * @link React Icons https://react-icons.github.io/react-icons/icons/md/
 * @propsOut 
    iconYrlProps: {
      icon: 'BsFillPersonPlusFill',
      icon2: null,
      classAdded: 'IconYrl_Function1',
    },
 * @import import { IconYrl, IconYrlPropsType, IconYrlPropsOutType, IconYrlType } 
             from '../ComponentsLibrary/'
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
        <div className={getClasses(`IconYrl`, classAdded)}>
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
