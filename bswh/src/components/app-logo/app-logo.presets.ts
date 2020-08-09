import { size, styles } from "../../theme"
import { ImageStyle, ViewStyle } from "react-native"

const preset = (image: number, offset: number) => ({
  imageSize: {
    width: 100,
    height: size(image),
  } as ImageStyle,
  container: {
    ...styles.row,
    paddingLeft: size(offset),
  } as ViewStyle,
})

export const presets = {
  size4: preset(8, 1),
}

export type AppLogoPresets = keyof typeof presets
