import React, { ReactElement } from 'react'

export const LoaderOverlay: React.FunctionComponent<any> = (
  props: any
): ReactElement => {
  const { isLoaderOverlayVisible } = props

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  return (
    <div className={`LoaderOverlay ${classAdd}`}>
      <div className={`LoaderOverlay__spinner`}></div>
    </div>
  )
}
