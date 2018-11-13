import * as tinycolor from 'tinycolor2'

// Tiny colors
function multiplyColors(color1, color2) {
  const rgb1 = color1.toRgb()
  const rgb2 = color2.toRgb()

  rgb1.b = Math.floor((rgb1.b * rgb2.b) / 255)
  rgb1.g = Math.floor((rgb1.g * rgb2.g) / 255)
  rgb1.r = Math.floor((rgb1.r * rgb2.r) / 255)

  return tinycolor('rgb ' + rgb1.r + ' ' + rgb1.g + ' ' + rgb1.b)
}

//Tiny colors
function convertToTriplet(color) {
  const { r, g, b } = color.toRgb()

  return `${r}, ${g}, ${b}`
}

export function generatePalette(colorString: string, key) {
  const color = tinycolor(colorString)
  if (!color.isValid()) {
    throw 'Color invalid'
  }
  const baseLight = tinycolor('#ffffff')
  const baseDark = multiplyColors(color, color)
  const baseTriad = color.tetrad()

  return {
    [`--${key}-50`]: convertToTriplet(tinycolor.mix(baseLight, color, 12)),
    [`--${key}-100`]: convertToTriplet(tinycolor.mix(baseLight, color, 30)),
    [`--${key}-200`]: convertToTriplet(tinycolor.mix(baseLight, color, 50)),
    [`--${key}-300`]: convertToTriplet(tinycolor.mix(baseLight, color, 70)),
    [`--${key}-400`]: convertToTriplet(tinycolor.mix(baseLight, color, 85)),
    [`--${key}-500`]: convertToTriplet(tinycolor.mix(baseLight, color, 100)),
    [`--${key}-600`]: convertToTriplet(tinycolor.mix(baseDark, color, 87)),
    [`--${key}-700`]: convertToTriplet(tinycolor.mix(baseDark, color, 70)),
    [`--${key}-800`]: convertToTriplet(tinycolor.mix(baseDark, color, 54)),
    [`--${key}-900`]: convertToTriplet(tinycolor.mix(baseDark, color, 25)),
    [`--${key}-A100`]: convertToTriplet(
      tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(80)
        .lighten(65)
    ),
    [`--${key}-A200`]: convertToTriplet(
      tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(80)
        .lighten(55)
    ),
    [`--${key}-A400`]: convertToTriplet(
      tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(100)
        .lighten(45)
    ),
    [`--${key}-A700`]: convertToTriplet(
      tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(100)
        .lighten(40)
    ),
  }
}
