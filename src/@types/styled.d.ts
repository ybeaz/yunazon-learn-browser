import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: string
    background: string
  }
}
