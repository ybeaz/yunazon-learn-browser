import React, { ReactElement } from 'react'
import { IconContext } from 'react-icons'

import { ICONS } from '../../Constants/icons.const'

interface IconYrlArgs {
  classAdded: string
  icon?: string
  icon2?: string
}

export const IconYrl: React.FunctionComponent<IconYrlArgs> = (
  props: IconYrlArgs
): ReactElement => {
  const { icon = '', icon2 = '', classAdded } = props

  // @ts-ignore
  const Icon: any = ICONS[icon]
  // @ts-ignore
  const Icon2: any = ICONS[icon2]

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
