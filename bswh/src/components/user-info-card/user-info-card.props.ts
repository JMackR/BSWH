import { ViewProps } from "react-native"

export interface ListViewProps extends ViewProps {
  /**
   * The Thread, undefined for loading state
   */
  user_data: object
  /**
   * Invoked when the button is pressed
   */
  onPress?: () => void
}
