import { ProfileImagePresetNames } from "./profile-image.presets"
import { ViewStyle } from "react-native"

export interface ProfileImageProps {
  /** The preset, determines size */
  preset: ProfileImagePresetNames
  /** The image URL */
  image?: string
  /** Additional style */
  style?: ViewStyle
  /** Optional ring around the user */
  ringColor?: string
}
