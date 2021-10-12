export const getBuiltColor =
  (theme: string) =>
  (
    props2: any,
    color2: string,
    brightness2: number,
    theme2: string = theme
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

    const [hue, saturation, value] = props2.theme.colors[colorNext][theme2]
    const valueNext = value + brightness2
    console.info('getBuiltColor [31]', { colorNext, theme2 })

    return `hsl(${hue}, ${saturation}%, ${valueNext}%)`
  }
