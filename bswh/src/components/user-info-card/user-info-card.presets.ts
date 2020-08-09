import { color, styles, thin } from "../../theme"
import { ViewStyle } from "react-native"

const containerBaseStyle = {
  ...styles.row,
  ...styles.pad2,
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomColor: color.light,
  borderBottomWidth: thin(),
} as ViewStyle

export const presets = {
  primary: {
    ...containerBaseStyle,
    backgroundColor: color.containerBackground1,
  },
  unread: {
    ...containerBaseStyle,
    backgroundColor: color.muted3,
  },
}

export type ThreadViewPresetNames = keyof typeof presets
