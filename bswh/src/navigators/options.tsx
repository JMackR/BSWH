import * as React from "react"
import { TransitionPresets, StackNavigationOptions } from "@react-navigation/stack"
import { Easing, TouchableOpacity } from "react-native"
import { Dimensions } from "react-native"
import { ifIphoneX } from "react-native-iphone-x-helper"
import { Icon } from "../components"
import { useNavigation } from "@react-navigation/native"
import { mergeStyles } from "../utils/styles"
import { styles } from "../theme/styles"
const width = Math.floor(Dimensions.get("window").width)

/**
 * Navigation Element
 */

export const NavigationBackButton = () => {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        goBack()
      }}
      style={mergeStyles(styles.justifyCenter, { height: 50, width: 100 })}
    >
      <Icon
        name={"arrow-right"}
        size={"small"}
        color={"#FFFFFF"}
        style={{ transform: [{ rotate: "180deg" }], marginLeft: 15 }}
      />
    </TouchableOpacity>
  )
}

/**
 * Screen Options
 */
export const defaultScreenOptions = {
  gestureEnabled: false,
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#0090BB",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#000000",
    shadowOpacity: 0.07,
    elevation: 3,
    borderColor: "#707070",
    ...ifIphoneX(
      {
        height: width * 0.28,
      },
      {
        height: width * 0.25,
      },
    ),
  },
  headerLeftContainerStyle: {
    marginTop: 5,
  },
  headerRightContainerStyle: {
    marginTop: 5,
  },
  headerTitleContainerStyle: {
    right: 0,
    left: 0,
  },
}

export const FullScreenModalOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  ...TransitionPresets.ModalSlideFromBottomIOS,
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 300,
        easing: Easing.out(Easing.ease),
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 300,
        easing: Easing.out(Easing.ease),
      },
    },
  },
}
