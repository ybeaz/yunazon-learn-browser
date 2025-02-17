import React, { Attributes, FunctionComponent } from 'react'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ComposableMapProps,
} from 'react-simple-maps'

import { IconYrl } from 'yourails_common'
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
      scale: 500,
    },
    children,
  })

const geoUrlExample =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json'

const markersExample = [
  {
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037],
  },
  { name: 'La Paz', coordinates: [-68.1193, -16.4897] },
  { name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  { name: 'Santiago', coordinates: [-70.6693, -33.4489] },
  { name: 'Bogota', coordinates: [-74.0721, 4.711] },
  { name: 'Quito', coordinates: [-78.4678, -0.1807] },
  { name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
  { name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
  { name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
  { name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  { name: 'Caracas', coordinates: [-66.9036, 10.4806] },
  { name: 'Lima', coordinates: [-77.0428, -12.0464] },
]

/**
 * @description NOT USED: Component to render MapEntities
 * @import import { MapEntities, MapEntitiesPropsType, MapEntitiesPropsOutType, MapEntitiesType } 
             from '../Components/MapEntities/MapEntities'
 */
const MapEntitiesComponent: MapEntitiesComponentType = (props: MapEntitiesComponentPropsType) => {
  const { classAdded, geoUrl = geoUrlExample, markers = markersExample } = props

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
        {markers.map(({ name, coordinates }) => (
          // @ts-ignore
          <Marker key={name} coordinates={coordinates}>
            <g
              fill='none'
              stroke='#FF5533'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(-12, -24)'
            >
              <circle cx='12' cy='10' r='3' />
              <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
            </g>
            <text
              textAnchor='middle'
              y={48}
              style={{
                fontFamily: 'system-ui',
                fill: '#5D5A6D',
                fontSize: '32px',
                fontWeight: 'bold',
              }}
              fontSize='48px'
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMapFC>
    </div>
  )
}

const MapEntities: MapEntitiesType = React.memo(MapEntitiesComponent)

export type { MapEntitiesPropsType, MapEntitiesType }
export { MapEntities }
