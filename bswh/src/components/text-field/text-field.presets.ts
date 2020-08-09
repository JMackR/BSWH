import { color, size } from "../../theme"
import { Platform, TextStyle, ViewStyle } from "react-native"
import { moderateScale as ms } from "../../utils/scaling"

const containerBaseStyle = {
  minHeight: 0,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
} as ViewStyle

const inputBaseStyle = {
  flexGrow: 1,
  maxHeight: size(3),
  margin: size(1),
  paddingTop: Platform.select({ android: 0 }),
  paddingBottom: Platform.select({ android: 0 }),
} as ViewStyle

export const presets = {
  primary: {
    containerStyle: {
      ...containerBaseStyle,
      backgroundColor: color.primary,
      borderRadius: size(0.5),
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      color: color.light,
    } as TextStyle,
    selectionColor: color.brand,
    placeholderTextColor: color.primary3,
    iconTint: color.light,
  },
  dark: {
    containerStyle: {
      ...containerBaseStyle,
      backgroundColor: color.secondary,
      borderRadius: size(0.5),
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      color: color.dark,
      backgroundColor: color.secondary,
    } as TextStyle,
    iconTint: color.dark,
    selectionColor: color.dark,
    placeholderTextColor: color.shade1,
  },
  noOutline: {
    containerStyle: {
      ...containerBaseStyle,
      borderRadius: size(0.5),
      borderColor: color.primary,
      backgroundColor: color.secondary,
      borderWidth: 0,
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      color: color.dark,
    } as TextStyle,
    iconTint: color.primary,
    selectionColor: color.primary,
    placeholderTextColor: color.shade1,
  },
  greyBackground: {
    containerStyle: {
      ...containerBaseStyle,
      borderRadius: size(0.5),
      borderColor: color.primary,
      backgroundColor: color.secondary1,
      borderWidth: 0,
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      color: color.dark,
      paddingBottom: ms(5),
    } as TextStyle,
    iconTint: color.primary,
    selectionColor: color.primary,
    placeholderTextColor: color.shade1,
  },
  underline: {
    containerStyle: {
      ...containerBaseStyle,
      borderColor: color.border,
      borderBottomWidth: 1,
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      color: color.dark,
    } as TextStyle,
    iconTint: color.primary,
    selectionColor: color.primary,
    placeholderTextColor: color.shade1,
  },
  light: {
    containerStyle: {
      ...containerBaseStyle,
      backgroundColor: "rgba(61,157,211, 0.1)",
      borderRadius: size(0.5),
    } as ViewStyle,
    inputStyle: {
      ...inputBaseStyle,
      paddingTop: 3,
      paddingLeft: 10,
      marginLeft: 0,
      paddingRight: ms(50),
    } as TextStyle,
    selectionColor: color.brand,
    textFieldPreset: "noOutline" as TextFieldPresetNames,
    placeholderTextColor: color.primary3,
    iconTint: color.light,
  },
}

export type TextFieldPresetNames = keyof typeof presets
