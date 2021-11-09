export interface ColorTupple {
  Light: [string, number, number, number, number]
  Dark: [string, number, number, number, number]
}
// and extend them!
export interface DefaultTheme {
  colors: {
    colorFirst: ColorTupple
    colorSecond: ColorTupple

    colorGrey: ColorTupple

    colorActive: ColorTupple
    colorBoxes: ColorTupple
  }
}

/**
 * @description This is a theme definition. Pay attention [0, 0, 12.5] means [hue, saturation, lightness]
 */

export const GLOBAL_THEME: DefaultTheme = {
  colors: {
    colorFirst: {
      Light: ['rgba', 25, 35, 50, 0.9], // HSLA ['hsla', 0, 0, 12.5, 1], RBG [32, 32, 32]
      Dark: ['hsla', 0, 0, 87.5, 1], // RGB [255, 255, 255]
    },

    colorSecond: {
      Light: ['rgba', 252, 252, 252, 1], // Vars: ['hsla', 0, 0, 99, 1]   [0, 0, 99]
      Dark: ['hsla', 0, 0, 12.5, 1],
    },

    colorGrey: {
      Light: ['rgba', 25, 35, 50, 1],
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

export interface ILightness {
  darker4: number
  darker3: number
  darker2: number
  darker: number
  middle: number
  lighter: number
  lighter2: number
  lighter3: number
  lighter4: number
}

export const LIGHTNESS = {
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

export interface IAlphas {
  clearer4: number
  clearer3: number
  clearer2: number
  clearer: number
  medial: number
  opaciter: number
  opaciter2: number
  opaciter3: number
  opaciter4: number
}

export const ALPHAS = {
  clearer4: +0.1,
  clearer3: +0.075,
  clearer2: +0.05,
  clearer: +0.025,
  medial: 0,
  opaciter: -0.1,
  opaciter2: -0.2,
  opaciter3: -0.3,
  opaciter4: -0.5,
}
