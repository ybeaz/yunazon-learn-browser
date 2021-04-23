import React from 'react'
import { useSelector } from 'react-redux'

import { IRootStore } from '../../@types/IRootStore'

export const LoaderOverlay: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
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
