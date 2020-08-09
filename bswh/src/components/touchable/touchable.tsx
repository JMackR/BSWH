import * as React from "react"
import { TouchableOpacity } from "react-native"
import { globals } from "../../theme"
import { TouchableProps } from "./touchable.props"
import { iif } from "../../utils"

/**
 * A wrapper around a native TouchableOpacity with default appearance values
 * @param props the TouchableOpacityProps
 * @constructor
 */
export const Touchable = ({ delay, onPress, ...props }: TouchableProps) => {
  // TODO This is potentially stupid, if there are re-render issues, consider debouncing
  const [tapped, setTapped] = React.useState(false)
  const tappedRef = React.useRef<boolean>(false)
  React.useEffect(() => {
    if (tapped) {
      setTapped(false)
      tappedRef.current = false
    }
  }, [tapped, tappedRef])
  return (
    <TouchableOpacity
      activeOpacity={globals.activeOpacity}
      delayPressIn={iif(delay, globals.scrollPressDelay)}
      onPress={e => {
        if (!tappedRef.current) {
          if (onPress) onPress(e)
          tappedRef.current = true
          setTapped(true)
        }
      }}
      {...props}
    />
  )
}
