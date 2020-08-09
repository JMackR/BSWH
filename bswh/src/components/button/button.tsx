import * as React from "react"
import { TextStyle, TouchableHighlight, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from ".."

import { presets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { color, globals, styles } from "../../theme"
import { mergeStyles } from "../../utils/styles"
import { iif } from "../../utils"

const hideBorder = { borderColor: color.transparent } as ViewStyle
const spreadText = { textAlign: "left" } as TextStyle
const spreadView = { justifyContent: "space-between" } as ViewStyle
const squaredStyle = { borderRadius: 0 } as ViewStyle

/**
 * Buttons!
 * @param preset
 * @param tx
 * @param txOptions
 * @param text
 * @param styleOverride
 * @param textStyleOverride
 * @param children
 * @param disabled
 * @param justify
 * @param selected
 * @param shadow
 * @param icon
 * @param rest
 * @param groupId
 * @param squared
 * @param onPress
 * @constructor
 */
export function Button({
  preset = "primary",
  tx,
  txOptions,
  text,
  style: styleOverride,
  textStyle: textStyleOverride,
  children,
  disabled,
  justify,
  selected,
  allowUnselect,
  shadow,
  icon,
  groupId,
  squared,
  iconColor,
  onPress,
  ...rest
}: ButtonProps) {
  const [showUnderlay, setShowUnderlay] = React.useState<boolean>()
  const [groupSelected, setGroupSelected] = React.useState<boolean>(!!groupId && groupId === buttonGroup?.selected)

  const isSpread = justify === "spread"
  const presetStyle = presets[preset]
  const isSelected = selected || groupSelected

  const viewStyle = mergeStyles(
    presetStyle.viewStyle,
    disabled && styles.disabled,
    iif(showUnderlay, hideBorder),
    iif(isSpread, spreadView),
    iif(isSelected, presetStyle.selectedViewStyle),
    iif(shadow, styles.shadow),
    styleOverride,
    iif(squared, squaredStyle),
  )

  const textStyle = mergeStyles(
    presetStyle.textStyle,
    textStyleOverride,
    iif(isSelected, presetStyle.selectedTextStyle),
    iif(isSpread, spreadText),
  )

  const content = (
    <React.Fragment>
      {children ||
        ((text || tx) && (
          <Text preset="button" tx={tx} txOptions={txOptions} text={text} style={textStyle} numberOfLines={1} />
        ))}
    </React.Fragment>
  )

  const onPressCallback = React.useCallback(
    (e) => {
      if (onPress) onPress(e)
    },
    [onPress],
  )

  return (
    <TouchableOpacity
      style={viewStyle}
      onShowUnderlay={() => setShowUnderlay(true)}
      onHideUnderlay={() => setShowUnderlay(false)}
      disabled={disabled || (isSelected && !allowUnselect)}
      onPress={onPressCallback}
      {...rest}
    >
      {content}
    </TouchableOpacity>
  )
}
