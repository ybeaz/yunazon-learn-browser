/**
 * @description Funciton to calculate hue from RGB color code
 * @link https://www.codedrome.com/rgb-hsl-conversions-in-javascript/
 * @link https://www.w3schools.com/css/css_colors_hsl.asp
 */

interface IgetCalculatedHue {
  (R: number, G: number, B: number): {
    hue: number
    saturation: number
    value: number
  }
}

export const getCalculatedRgbToHsv: IgetCalculatedHue = (r, g, b) => {
  let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn
  rabs = r / 255
  gabs = g / 255
  babs = b / 255
  ;(v = Math.max(rabs, gabs, babs)), (diff = v - Math.min(rabs, gabs, babs))
  diffc = c => (v - c) / 6 / diff + 1 / 2
  percentRoundFn = num => Math.round(num * 100) / 100

  if (diff == 0) {
    h = s = 0
  } else {
    s = diff / v
    rr = diffc(rabs)
    gg = diffc(gabs)
    bb = diffc(babs)

    if (rabs === v) {
      h = bb - gg
    } else if (gabs === v) {
      h = 1 / 3 + rr - bb
    } else if (babs === v) {
      h = 2 / 3 + gg - rr
    }
    if (h < 0) {
      h += 1
    } else if (h > 1) {
      h -= 1
    }
  }
  return {
    hue: Math.round(h * 360),
    saturation: percentRoundFn(s * 100),
    value: percentRoundFn(v * 100),
  }
}

export const getCalculatedRgbToHue2: IgetCalculatedHue = (R, G, B) => {
  let Max = 0.0
  let Min = 0.0

  let fR = R / 255.0
  let fG = G / 255.0
  let fB = B / 255.0

  if (fR >= fG && fR >= fB) Max = fR
  else if (fG >= fB && fG >= fR) Max = fG
  else if (fB >= fG && fB >= fR) Max = fB

  if (fR <= fG && fR <= fB) Min = fR
  else if (fG <= fB && fG <= fR) Min = fG
  else if (fB <= fG && fB <= fR) Min = fB

  let Hue

  if (Max == Min) {
    Hue = -1.0
  } else {
    if (Max == fR) {
      Hue = (fG - fB) / (Max - Min)
    } else if (Max == fG) {
      Hue = 2.0 + (fB - fR) / (Max - Min)
    } else if (Max == fB) {
      Hue = 4.0 + (fR - fG) / (Max - Min)
    }

    Hue *= 60.0

    if (Hue < 0.0) {
      Hue += 360.0
    }
  }

  return Hue
}
