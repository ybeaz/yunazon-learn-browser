import React from 'react'
import { useSelector } from 'react-redux'

export const LoaderOverlay: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { isLoaderOverlayVisible } = props

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  return (
    <div className={`LoaderOverlay ${classAdd}`}>
      <div className={`LoaderOverlay__spinner`}></div>
    </div>
  )
}
