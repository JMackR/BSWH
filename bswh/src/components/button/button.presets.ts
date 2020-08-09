import { TextStyle, ViewStyle } from "react-native"
import { border, color, size, styles } from "../../theme"
import * as TextPresets from "../text/text.presets"
import Color from "color"

const baseView = {
  flexShrink: 0,
  paddingHorizontal: size(2),
  borderRadius: 4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
} as ViewStyle

const defaultView = {
  ...baseView,
  height: size(7),
} as ViewStyle

const roundView = {
  ...baseView,
  width: size(5),
  height: size(5),
  borderRadius: size(5) / 2,
} as ViewStyle

const roundLargeView = {
  ...baseView,
  ...styles.round,
  width: size(6),
  height: size(6),
} as ViewStyle

const roundedView = {
  ...baseView,
  height: size(5),
  borderRadius: size(5) / 2,
} as ViewStyle

const roundSmallView = {
  ...baseView,
  width: size(4),
  height: size(4),
  borderRadius: size(4) / 2,
} as ViewStyle

const pillView = {
  ...baseView,
  height: size(4),
  borderRadius: size(2),
} as ViewStyle

const linkView = {
  ...baseView,
  height: size(3),
  paddingHorizontal: 0,
} as ViewStyle

const baseTextStyle = {
  textAlign: "center",
  flexShrink: 1,
} as TextStyle

interface ButtonPreset {
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  highlightColor?: string
  selectedViewStyle?: ViewStyle
  selectedTextStyle?: TextStyle
  iconTint?: string
  iconParentStyle?: ViewStyle
}

const brand = {
  viewStyle: {
    ...defaultView,
    backgroundColor: color.brand,
  },
  textStyle: {
    ...baseTextStyle,
    ...TextPresets.presets.button,
    color: color.darkBackground,
  },
} as ButtonPreset

export const presets = {
  brand,
}

export type ButtonPresetNames = keyof typeof presets
