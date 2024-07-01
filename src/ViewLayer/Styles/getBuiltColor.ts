export const getBuiltColor =
  (themeFor: string, alphaIn: number, lightnessIn: number) =>
  (
    props2: any,
    color2: string,
    alpha2: number = alphaIn,
    lightness2: number = lightnessIn,
    themeFrom2: string = themeFor
  ): string => {
    let colorNext = color2

    if (
      color2 === 'colorFirstDarker' ||
      color2 === 'colorFirst' ||
      color2 === 'colorFirstLighter'
    ) {
      colorNext = 'colorFirst'
    } else if (
      color2 === 'colorSecondDarker' ||
      color2 === 'colorSecond' ||
      color2 === 'colorSecondLighter2' ||
      color2 === 'colorSecondLighter3' ||
      color2 === 'colorSecondLighter4'
    ) {
      colorNext = 'colorSecond'
    } else if (color2 === 'colorActiveDarker') {
      colorNext = 'colorActive'
    }

    const [colorFormat, redOrHue, greenOrSaturation, blueOrLightness, alpha] =
      props2.theme.colors[colorNext][themeFrom2]

    const blueOrLightnessNext = blueOrLightness + lightness2
    const alphaNext = alpha + alpha2

    const percent = colorFormat === 'hsla' ? '%' : ''
    const divider = colorFormat === 'rgba' ? '/' : ''
    const color = `${colorFormat}(${redOrHue}, ${greenOrSaturation}${percent}, ${blueOrLightnessNext}${percent}, ${alphaNext})`

    return color
  }
