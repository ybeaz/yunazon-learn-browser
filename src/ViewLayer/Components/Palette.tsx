import React, { useState } from 'react'

import { GLOBAL_THEME, LIGHTNESS, ALPHAS } from 'yourails_common'
import { getBuiltColor } from '../Styles/getBuiltColor'

interface PaletteArgs {}

export const Palette: React.FunctionComponent<PaletteArgs> = (props: PaletteArgs) => {
  const [paramState, setParamState] = useState('alpha')

  const handleLocalEvents = (event: any, data: any) => {
    const { typeLocalEvent } = data

    const handleObject = {
      CHANGE_COLOR_FORMAT: () => {
        console.info('Palette [21]')
        const paramStateNext = paramState === 'lightness' ? 'alpha' : 'lightness'
        setParamState(paramStateNext)
      },
    }

    return handleObject[typeLocalEvent]()
  }

  const { colors } = GLOBAL_THEME

  const colorsKeys = Object.keys(colors)

  const getColorPlates = (
    paramState3: string,
    theme3: string,
    color3: string,
    alphasObj: any,
    lightnessObj: any
  ) => {
    const paramObj = paramState3 === 'alpha' ? alphasObj : lightnessObj

    return Object.keys(paramObj).map(paramKey => {
      const props2 = {
        theme: GLOBAL_THEME,
      }
      const getColor = getBuiltColor(theme3, 1, 1)

      let background = ''

      if (paramState3 === 'alpha') {
        background = getColor(props2, color3, alphasObj[paramKey], 1)
      } else if (paramState3 === 'lightness') {
        background = getColor(props2, color3, 1, lightnessObj[paramKey])
      }

      return (
        <div className='_colorPlate' style={{ background }}>
          {paramKey}
        </div>
      )
    })
  }

  const getColorsRow = (colorFormatState2: string, theme2: string, colorsKeys2: string[]) => {
    return colorsKeys2.map((color2: string) => {
      return (
        <div className='_colorColumnWrapper'>
          <div className='_colorTitle'>{color2}</div>
          <div className='_colorColumn'>
            {getColorPlates(colorFormatState2, theme2, color2, ALPHAS, LIGHTNESS)}
          </div>
        </div>
      )
    })
  }

  return (
    <div className='Palette'>
      <div className='__themeTitleBlock'>
        <div>Dark</div>
        <button
          className='_changeThemeButton'
          onClick={event => handleLocalEvents(event, { typeLocalEvent: 'CHANGE_COLOR_FORMAT' })}
        >
          {paramState.toUpperCase()}
        </button>
      </div>
      <div className='__theme'>{getColorsRow(paramState, 'Dark', colorsKeys)}</div>

      <div className='__themeTitleBlock'>Light</div>
      <div className='__theme'>{getColorsRow(paramState, 'Light', colorsKeys)}</div>
    </div>
  )
}
