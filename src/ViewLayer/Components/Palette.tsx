import React from 'react'

import { GLOBAL_THEME, BRIGHTNESS } from '../../Constants/globalTheme.const'
import { getBuiltColor } from '../Styles/getBuiltColor'

interface PaletteArgs {}

export const Palette: React.FunctionComponent<PaletteArgs> = (
  props: PaletteArgs
) => {
  const { colors } = GLOBAL_THEME

  const colorsKeys = Object.keys(colors)

  const getColorPlates = (theme, color, brightnessObj) => {
    return Object.keys(brightnessObj).map(brightnessKey => {
      const props2 = {
        theme: GLOBAL_THEME,
      }
      const getColor = getBuiltColor(theme)
      const background = getColor(props2, color, brightnessObj[brightnessKey])

      return (
        <div className='_colorPlate' style={{ background }}>
          {brightnessKey}
        </div>
      )
    })
  }

  const getColorsRow = (theme, colorsKeys2) => {
    return colorsKeys2.map(color => {
      return (
        <div className='_colorColumnWrapper'>
          <div className='_colorTitle'>{color}</div>
          <div className='_colorColumn'>
            {getColorPlates(theme, color, BRIGHTNESS)}
          </div>
        </div>
      )
    })
  }

  return (
    <div className='Palette'>
      <div className='__themeTitle'>Dark</div>
      <div className='__theme'>{getColorsRow('Dark', colorsKeys)}</div>

      <div className='__themeTitle'>Light</div>
      <div className='__theme'>{getColorsRow('Light', colorsKeys)}</div>
    </div>
  )
}
