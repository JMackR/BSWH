import { color } from "../color"
import { ViewStyle } from "react-native"

export const shadow = {
  /** Adds the standard drop shadow style */
  shadow1: {
    elevation: 2,
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
  } as ViewStyle,
  shadow2: {
    elevation: 2,
    shadowColor: color.shadow,
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  } as ViewStyle,
  sideShadow: {
    backgroundColor: color.shadow,
    shadowOffset: { width: 5, height: 0 },
    shadowColor: "#000000",
    elevation: 2,
    shadowRadius: 2.0,
    shadowOpacity: 0.05,
  },
}
