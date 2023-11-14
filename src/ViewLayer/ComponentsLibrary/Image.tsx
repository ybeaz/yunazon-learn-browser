import React, { ReactElement } from 'react'

import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface ImageArgs {
  classAdded: string
  src: string | undefined
  action?: ActionReduxType
  handleEvents?: Function
}

export const Image: React.FunctionComponent<ImageArgs> = (
  props: ImageArgs
): ReactElement => {
  const { classAdded, src, handleEvents: handleEventsCustom, action } = props

  let handleEventsToUse = handleEventsCustom ? handleEventsCustom : handleEvents
  handleEventsToUse = action ? handleEventsToUse : () => ({})
  const classCursor = action ? '_cursor' : ''

  return (
    <div
      className={`Image ${classAdded}`}
      onClickCapture={(event: React.MouseEvent<HTMLDivElement>) =>
        handleEventsToUse(event, action)
      }
    >
      <img className={`_image ${classCursor}`} src={src} />
    </div>
  )
}
