import 'styled-components'

interface Dictionary {
  Light: string
  Dark: string
}
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorFirstDarker2: Dictionary
      colorFirstDarker: Dictionary
      colorFirst: Dictionary

      colorSecondDacker: Dictionary
      colorSecond: Dictionary
      colorSecondLighter2: Dictionary
      colorSecondLighter3: Dictionary
      colorSecondLighter4: Dictionary

      colorActive: Dictionary
      colorActiveDacker: Dictionary
      colorBoxes: Dictionary

      colorTest: Dictionary
      backgroundTest: Dictionary
    }
  }
}
