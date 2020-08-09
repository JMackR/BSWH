import { TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native"
import { TextFieldPresetNames } from "./text-field.presets"
import { RefObject } from "react"

export interface TextFieldProps extends TextInputProps {
  /** The Placeholder text if no placeholderTx is provided. */
  placeholder?: string
  /** Optional container style overrides useful for margins & padding. */
  style?: ViewStyle | ViewStyle[]
  /** Optional style overrides for the input. */
  inputStyle?: TextStyle | TextStyle[]
  /** Style preset */
  preset: TextFieldPresetNames
  /** Object reference to the real TextInput */
  forwardedRef?: RefObject<TextInput>
}
