import 'styled-components'

interface ColorTupple {
  Light: [string, number, number, number, number]
  Dark: [string, number, number, number, number]
}
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorFirst: ColorTupple
      colorSecond: ColorTupple
      colorGrey: ColorTupple
      colorActive: ColorTupple
    }
  }
}
