import { TribeLogoPresetNames } from "./app-logo.presets"
import { ViewStyle } from "react-native"

export interface AppLogoProps {
  /** The preset, determines size */
  preset: TribeLogoPresetNames
  /** The image URL */
  image?: string
  /** Additional style */
  style?: ViewStyle
  /** Optional ring around the user */
  ringColor?: string
}
