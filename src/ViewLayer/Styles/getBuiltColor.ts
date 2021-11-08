export const getBuiltColor =
  (themeIn: string, alphaIn: number, lightnessIn: number) =>
  (
    props2: any,
    color2: string,
    alpha2: number = alphaIn,
    lightness2: number = lightnessIn,
    theme2: string = themeIn
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
      props2.theme.colors[colorNext][theme2]

    const blueOrLightnessNext = blueOrLightness + lightness2
    const alphaNext = alpha + alpha2

    if (color2 === 'colorFirst' && alpha2 === 0 && lightness2 === 0) {
      console.info('getBuiltColor [32]', {
        colorFormat,
        colorNext,
        redOrHue,
        greenOrSaturation,
        blueOrLightnessNext,
        alphaNext,
        color: `${colorFormat}(${redOrHue}, ${greenOrSaturation}%, ${blueOrLightnessNext}%, ${alphaNext})`,
      })
    }

    return `${colorFormat}(${redOrHue}, ${greenOrSaturation}%, ${blueOrLightnessNext}%, ${alphaNext})`
  }
