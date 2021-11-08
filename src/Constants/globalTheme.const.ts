import { DefaultTheme } from '../Interfaces/IColors'

/**
 * @description This is a theme definition. Pay attention [0, 0, 12.5] means [hue, saturation, lightness]
 */

export const GLOBAL_THEME: DefaultTheme = {
  colors: {
    colorFirst: {
      Light: ['hsla', 0, 0, 12.5, 1], // RBG [32, 32, 32]
      Dark: ['hsla', 0, 0, 87.5, 1], // RGB [255, 255, 255]
    },

    colorSecond: {
      Light: ['hsla', 0, 0, 99, 1], // Vars: [216, 33, 15]   [0, 0, 99]
      Dark: ['hsla', 0, 0, 12.5, 1],
    },

    colorGrey: {
      Light: ['hsla', 0, 0, 44, 1],
      Dark: ['hsla', 0, 0, 44, 1],
    },

    colorActive: {
      Light: ['hsla', 222, 52.9, 46.7, 1], // RBG [56, 94, 182]
      Dark: ['hsla', 222, 52.9, 46.7, 1],
    },

    colorBoxes: {
      Light: ['hsla', 208, 100, 62.2, 1], // RBG [62, 166, 255]
      Dark: ['hsla', 208, 100, 62.2, 1],
    },
  },
}

export const ALPHAS = {
  darker4: +0.1,
  darker3: +0.075,
  darker2: +0.05,
  darker: +0.025,
  middle: 0,
  lighter: -0.1,
  lighter2: -0.2,
  lighter3: -0.4,
  lighter4: -0.6,
}

export const BRIGHTNESS = {
  darker4: -12,
  darker3: -9,
  darker2: -6,
  darker: -3,
  middle: 0,
  lighter: 3,
  lighter2: 6,
  lighter3: 9,
  lighter4: 12,
}
