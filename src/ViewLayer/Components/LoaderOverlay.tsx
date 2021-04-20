import React from 'react'
import { useSelector } from 'react-redux'

import { RootStore } from '../../@types/RootStore'

export const LoaderOverlay: Function = (props: any): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const {
    componentsState: { loaderOverlayState },
  } = store

  const classAdd = loaderOverlayState ? 'LoaderOverlay_show' : ''

  return (
    <div className={`LoaderOverlay ${classAdd}`}>
      <div className={`LoaderOverlay__spinner`}></div>
    </div>
  )
}
