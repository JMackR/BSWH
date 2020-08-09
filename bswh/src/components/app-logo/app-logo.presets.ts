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
  size3: preset(3, 1, "size4"),
  size4: preset(4, 1, "size4"),
  size5: preset(5, 1, "size4"),
  size6: preset(6, 2, "size5"),
  size7: preset(7, 3, "size7"),
  size8: preset(8, 3, "size8"),
  size10: preset(10, 4, "size8"),
  size11: preset(11, 4, "size8"),
  size13: preset(13, 5, "size8"),
  size18: preset(18, 6, "size8"),
}

export type ProfileImagePresetNames = keyof typeof presets
