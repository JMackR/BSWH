import * as React from "react"
import {
  TransitionPresets,
  StackNavigationOptions,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/stack"
import { Easing, TouchableOpacity } from "react-native"
import { Dimensions } from "react-native"

import { ifIphoneX } from "react-native-iphone-x-helper"
import { Icon, Text } from "../components"
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native"
import { mergeStyles } from "../utils/styles"
import { styles } from "../theme/styles"
import { useContext } from "react"
import { AppContext } from "@internal/providers/index"
const width = Math.floor(Dimensions.get("window").width)
/**
 * Navigation Elements
 */

export const NavigationBackButton = () => {
  const { goBack } = useNavigation()
  // const state = useNavigationState(state => state)
  // console.log("what is the state", state)
  const auth = useRoute().params?.auth
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
        color={auth ? "#7CE2CB" : "#FFFFFF"}
        style={{ transform: [{ rotate: "180deg" }], marginLeft: 15 }}
      />
    </TouchableOpacity>
  )
}

export const RightButtonActions = () => {
  const { goBack } = useNavigation()
  const auth = useRoute().params?.auth

  return (
    <TouchableOpacity
      onPress={() => {
        // setIsEditing(false)
        // setDelete(true)
      }}
      style={mergeStyles(styles.justifyCenter, { height: 20, width: 100 })}
    >
      <Text
        text={"Delete"}
        preset={"title1"}
        color={"#FFFFFF"}
        style={{ marginLeft: 10, alignSelf: "center" }}
      />
    </TouchableOpacity>
  )
}
export const SearchHistoryButton = () => {
  const { navigate } = useNavigation()
  const fandom = useRoute().params.fandom

  return (
    <>
      {!fandom && (
        <TouchableOpacity
          onPress={() => {
            console.log("AM I FIRING")
            navigate("ItemDetail")
          }}
          style={mergeStyles(styles.rowAlignCenter)}
        >
          <Icon
            name={"chart-icon"}
            size={"small"}
            color={"#FFFFFF"}
            style={{ marginRight: 15, height: 25, width: 25 }}
          />
        </TouchableOpacity>
      )}
    </>
  )
}
/**
 * Useful for screen-specific analytics events.
 * @param extraClickAction callback that will be called when back is pressed
 */
export const defaultScreenOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#7CE2CB",
    // shadowOffset: { width: 0, height: 3 },
    // shadowColor: "#000000",
    // shadowOpacity: 0.07,
    // elevation: 3,
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

export const getNavigationBackButtonWithAction = (
  extraClickAction?: () => void,
  incomingTestID?: string,
) => {
  return {
    // icon: ActionLeftChevron,
    // testID: (incomingTestID || "ucl.navigators-bar") + ".back",
    // pressHandler: () => {
    //   extraClickAction && extraClickAction()
    //   Navigation.goBack()
    // },
  }
}

export const NavigationCloseButton = (incomingTestID: string) => {
  return {
    // icon: ActionClose,
    // testID: (incomingTestID || "ucl.navigators-bar") + ".close",
    // pressHandler: () => {
    //   Navigation.popRootNavigator()
    // },
  }
}

export const NavigationCancelNavButton = (
  incomingTestID?: string,
  extraClickAction?: () => void,
) => {
  return {
    // title: "common-actions.cancel",
    // testID: (incomingTestID || "ucl.navigators-bar") + ".cancel",
    // pressHandler: () => {
    //   extraClickAction && extraClickAction()
    //   Navigation.goBack()
    // },
  }
}

/**
 * Useful for screen-specific analytics events.
 * @param extraClickAction callback that will be called when close is pressed
 */
export const getNavigationCloseButtonWithAction = (
  extraClickAction?: () => void,
  incomingTestID?: string,
) => {
  return {
    // icon: ActionClose,
    // testID: (incomingTestID || "ucl.navigators-bar") + ".close",
    // pressHandler: () => {
    //   extraClickAction && extraClickAction()
    //   Navigation.popRootNavigator()
    // },
  }
}

/**
 * Transition Configs
 */

const modalDialogOverlayTransitionConfig = {
  animation: "timing",
  config: {
    duration: 350,
    easing: Easing.inOut(Easing.poly(2)),
  },
}

const modalCardOverlayTransitionConfig = {
  animation: "timing",
  config: {
    duration: 10,
  },
}

/**
 * Screen Options
 */
export const FullScreenModalNoAnimateOptions: StackNavigationOptions = {
  animationEnabled: false,
}

export const FullScreenModalOptions: StackNavigationOptions = {
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

export const PushPopStackAnimationOptions: StackNavigationOptions = {
  ...TransitionPresets.SlideFromRightIOS,
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

export const ModalDialogOverlayOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
  transitionSpec: {
    open: modalDialogOverlayTransitionConfig,
    close: modalDialogOverlayTransitionConfig,
  },
}

export const useMultiStepCardNavigatorOptions = () => {
  const backgroundColor = "transparent"
  const navigationOptions: StackNavigationOptions = {
    ...FullScreenModalOptions,
    cardStyle: { backgroundColor: "transparent" },
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({ current: { progress }, layouts }) => ({
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
        backgroundColor,
      },
    }),
  }
  return { MultiStepModalCardNavigatorOptions: navigationOptions }
}

export const ModalCardOverlayOption: StackNavigationOptions = {
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
  transitionSpec: {
    open: modalCardOverlayTransitionConfig,
    close: modalCardOverlayTransitionConfig,
  },
}
