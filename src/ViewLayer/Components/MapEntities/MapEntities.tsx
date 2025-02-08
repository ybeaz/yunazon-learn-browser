import React, { Attributes, FunctionComponent } from 'react'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ComposableMapProps,
} from 'react-simple-maps'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import {
  MapEntitiesComponentPropsType,
  MapEntitiesPropsType,
  MapEntitiesPropsOutType,
  MapEntitiesComponentType,
  MapEntitiesType,
} from './MapEntitiesTypes'

const ComposableMapFC = ({ children }: { children: any }) =>
  React.createElement(ComposableMap as FunctionComponent<ComposableMapProps>, {
    projection: 'geoAzimuthalEqualArea',
    projectionConfig: {
      rotate: [58, 20, 0],
      scale: 600,
    },
    children,
  })

/**
 * @description Component to render MapEntities
 * @import import { MapEntities, MapEntitiesPropsType, MapEntitiesPropsOutType, MapEntitiesType } 
             from '../Components/MapEntities/MapEntities'
 */
const MapEntitiesComponent: MapEntitiesComponentType = (props: MapEntitiesComponentPropsType) => {
  const { classAdded, geoUrl, markers } = props

  const propsOut: MapEntitiesPropsOutType = {}

  return (
    <div className={getClasses('MapEntities', classAdded)}>
      <ComposableMapFC>
        {/* @ts-ignore */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              // @ts-ignore
              <Geography key={geo.rsmKey} geography={geo} fill='#EAEAEC' stroke='#D6D6DA' />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          // @ts-ignore
          <Marker key={name} coordinates={coordinates}>
            <g
              fill='none'
              stroke='#FF5533'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(-12, -24)'
            >
              <circle cx='12' cy='10' r='3' />
              <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
            </g>
            <text
              textAnchor='middle'
              y={markerOffset}
              style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMapFC>
    </div>
  )
}

const storeStateSliceProps: string[] = []
const MapEntities: MapEntitiesType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(MapEntitiesComponent)
)

export type { MapEntitiesPropsType, MapEntitiesType }
export { MapEntities }
