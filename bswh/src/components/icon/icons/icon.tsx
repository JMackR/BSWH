import * as React from "react"
import { View, Image, ViewStyle } from "react-native"
import { moderateScale as ms } from "../../utils/scaling"
import { IconProps } from "./icon.props"
import { icons } from "./icons"
import { size } from "../../theme"
import { mergeStyles } from "../../utils/styles"

const containerBaseStyle = {
  width: size(4),
  height: size(4),
  justifyContent: "center",
  alignItems: "center",
} as ViewStyle

const SIZE_STYLES = {
  extraSmall: {
    height: size(2),
    width: size(2),
  } as ViewStyle,
  small: {
    height: size(3),
    width: size(3),
  } as ViewStyle,
  medium: {
    height: size(4),
    width: size(4),
  } as ViewStyle,
  large: {
    height: size(5),
    width: size(5),
  } as ViewStyle,
  extraLarge: {
    height: size(6),
    width: size(6),
  } as ViewStyle,
}

export const Icon = ({ name, size, style, color }: IconProps) => {
  const icon = icons[name][size]
  const imageStyle = mergeStyles(style, { tintColor: color })
  return <Image style={imageStyle} source={icon} />
}
