import { TextStyle, TextProps as TextProperties } from "react-native"
import { TextPresetNames } from "./text.presets"

export interface TextProps extends TextProperties {
  /**
   * Children preview-components.
   */
  children?: React.ReactNode

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object

  /**
   * The text to display if not using `tx` or nested preview-components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[]

  /**
   * One of the different types of text presets.
   */
  preset: TextPresetNames

  /** Optional color override, takes presedence over the value in style prop */
  color?: string
}
