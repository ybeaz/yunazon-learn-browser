import React from 'react'

export type MapEntitiesComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  geoUrl: string
  markers: any[]
}

export type MapEntitiesPropsType = Omit<MapEntitiesComponentPropsType, 'storeStateSlice'>

export type MapEntitiesPropsOutType = Record<string, any>

/**
 * @import import { MapEntitiesComponentPropsType, MapEntitiesPropsType, MapEntitiesPropsOutType, MapEntitiesComponentType, MapEntitiesType } from './MapEntitiesTypes'
 */
export interface MapEntitiesComponentType
  extends React.FunctionComponent<MapEntitiesComponentPropsType> {
  (props: MapEntitiesComponentPropsType): React.ReactElement
}

export type MapEntitiesType = React.FunctionComponent<MapEntitiesPropsType>
