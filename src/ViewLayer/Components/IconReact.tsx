import React, { ReactElement } from 'react'
import { IconContext } from 'react-icons'

import { ICONS } from '../../Constants/icons.const'

interface IconReactArgs {
  classAdded: string
  icon?: string
  icon2?: string
}

export const IconReact: React.FunctionComponent<IconReactArgs> = (
  props: IconReactArgs
): ReactElement => {
  const { icon = null, icon2 = null, classAdded } = props

  const Icon = ICONS[icon]
  const Icon2 = ICONS[icon2]

  return (
    <>
      {Icon && (
        <div className={`IconReact ${classAdded}`}>
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
