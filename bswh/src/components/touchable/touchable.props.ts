import { TouchableOpacityProps } from "react-native"

export interface TouchableProps extends React.PropsWithChildren<TouchableOpacityProps> {
  /** Whether to include the standard press delay (intended for use in scrolls) */
  delay?: boolean
}
