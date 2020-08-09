import { opacity } from "../color"
import { ViewStyle } from "react-native"

export const state = {
  /** Reduces opacity when disabled */
  disabled: {
    opacity: opacity.disabled,
  } as ViewStyle,
  /** Sets opacity to 0 */
  invisible: {
    opacity: 0,
  } as ViewStyle,
  /** Sets overflow to visible */
  overflowVisible: {
    overflow: "visible",
  } as ViewStyle,
  /** Sets overflow to hidden */
  overflowHidden: {
    overflow: "hidden",
  } as ViewStyle,
  category_active: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#60B6D8",
  } as ViewStyle,
  category_inactive: {
    alignSelf: "center",
    borderBottomWidth: 0,
    backgroundColor: "#fff",
    color: "#FFFFFFF",
  } as ViewStyle,
}
