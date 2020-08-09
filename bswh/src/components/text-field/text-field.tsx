import * as React from "react"
import { Platform, TextInput, ViewStyle, View } from "react-native"
import { TextFieldProps } from "./text-field.props"
import { mergeStyles } from "../../utils/styles"
import { presets } from "./text-field.presets"
import { color, size } from "../../theme"
import { iif } from "../../utils"

const multilineHack = {
  maxHeight: size(10),
  marginVertical: Platform.select({ android: 2 }),
} as ViewStyle

/**
 * Text field, thin layer above native TextInput for styling / i18n
 * Note the decision to NOT override the TextField name (as we have done elsewhere), this is
 * because users may need this and the native TextInput for the forwardedRef prop
 *
 * @param presetName the preset name
 * @param styleOverride appends to container style
 * @param inputStyleOverride appends to TextInput style
 * @param placeholder placeholder literal
 * @param forwardedRef attach to the `ref` of TextInput
 * @param props remaining props for TextInput
 * @constructor
 */

export const TextField = ({
  preset: presetName,
  style: styleOverride,
  inputStyle: inputStyleOverride,
  placeholder,
  onFocus,
  forwardedRef,
  clearButtonMode,
  ...props
}: TextFieldProps) => {
  const preset = presets[presetName]
  const containerStyle = mergeStyles(preset.containerStyle, styleOverride)
  const inputStyle = mergeStyles(preset.inputStyle, inputStyleOverride, iif(props.multiline, multilineHack))
  return (
    <View style={mergeStyles(containerStyle)}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={preset.placeholderTextColor}
        underlineColorAndroid={color.transparent}
        selectionColor={preset.selectionColor}
        textBreakStrategy={"highQuality"}
        style={inputStyle}
        onFocus={onFocus}
        ref={forwardedRef}
        {...props}
        numberOfLines={1}
      />
    </View>
  )
}
