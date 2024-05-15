import { consoler } from './consoler'

export type GetColorsRandomDarkThemeParamsType = {
  numberOfColors: number
}

export type GetColorsRandomDarkThemeOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetColorsRandomDarkThemeResType = string[]

interface GetColorsRandomDarkThemeType {
  (
    params: GetColorsRandomDarkThemeParamsType,
    options?: GetColorsRandomDarkThemeOptionsType
  ): GetColorsRandomDarkThemeResType
}

const optionsDefault: Required<GetColorsRandomDarkThemeOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getColorsRandomDarkTheme
 * @run ts-node src/shared/utils/getColorsRandomDarkTheme.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getColorsRandomDarkTheme.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getColorsRandomDarkTheme, GetColorsRandomDarkThemeParamsType } from '../Shared/getColorsRandomDarkTheme'
 */
export const getColorsRandomDarkTheme: GetColorsRandomDarkThemeType = (
  params: GetColorsRandomDarkThemeParamsType,
  optionsIn: GetColorsRandomDarkThemeOptionsType = optionsDefault
) => {
  const options: Required<GetColorsRandomDarkThemeOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { numberOfColors } = params
  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  const colors: GetColorsRandomDarkThemeResType = []

  try {
    const contrastThreshold = 18 // 4.5 Minimum contrast ratio for readability (WCAG AA standard)

    const randomColor = (): string => {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgb(${r},${g},${b})`
    }

    const calculateLuminance = (color: string): number => {
      const [r, g, b] = color.match(/\d+/g)!.map(Number)
      return 0.2126 * r + 0.7152 * g + 0.0722 * b
    }

    const isReadable = (color1: string, color2: string): boolean => {
      const lum1 = calculateLuminance(color1)
      const lum2 = calculateLuminance(color2)
      const brightest = Math.max(lum1, lum2)
      const darkest = Math.min(lum1, lum2)
      const contrast = (brightest + 0.05) / (darkest + 4) // Add 0.05 to avoid divide by zero
      return contrast >= contrastThreshold
    }

    for (let i = 0; i < numberOfColors; i++) {
      let color = randomColor()
      // Ensure readability against black background
      while (!isReadable(color, 'rgb(0,0,0)')) {
        color = randomColor()
      }
      colors.push(color)
    }
  } catch (error: any) {
    console.log('getColorsRandomDarkTheme', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getColorsRandomDarkTheme [89]', { ...parentFuncAdd, colors })
    }

    return colors
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getColorsRandomDarkTheme.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetColorsRandomDarkThemeParamsType = { numberOfColors: 10 }
    const output = await getColorsRandomDarkTheme(params, { printRes: true })
    consoler('getColorsRandomDarkTheme [104]', output)
  })()
}
