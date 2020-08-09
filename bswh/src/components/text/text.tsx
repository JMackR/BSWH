import * as React from "react"
import { Text as ReactNativeText, TextStyle } from "react-native"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"
import { mergeStyles } from "../../utils/styles"
import { iif } from "../../utils"

const autoLineHeight = {
  lineHeight: undefined,
} as TextStyle

/**
 * Text component, a styling wrapper around react-native's Text
 * @param children
 * @param txOptions
 * @param text
 * @param styleOverride
 * @param preset
 * @param color
 * @param numberOfLines
 * @param props
 * @constructor
 */
export const Text = ({
  children,
  txOptions,
  text,
  style: styleOverride,
  color,
  preset,
  numberOfLines = 1,
}: TextProps) => {
  const content = text || children
  const style = mergeStyles(
    presets[preset],
    styleOverride,
    iif(numberOfLines === 1, autoLineHeight), // The first time we need an exception, add props
    iif(color, { color }),
  ) as TextStyle
  return (
    <ReactNativeText style={style} numberOfLines={numberOfLines} allowFontScaling={false}>
      {content}
    </ReactNativeText>
  )
}
