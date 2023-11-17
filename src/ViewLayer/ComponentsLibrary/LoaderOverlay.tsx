import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootStoreType } from '../../Interfaces/RootStoreType'

export const LoaderOverlayYrl: React.FunctionComponent<
  any
> = (): ReactElement => {
  const {
    componentsState: { isLoaderOverlayVisible },
  } = useSelector((store2: RootStoreType) => store2)

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  return (
    <div className={`LoaderOverlayYrl ${classAdd}`}>
      <div className={`_spinner`}></div>
    </div>
  )
}
