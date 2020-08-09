import React, { useEffect } from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Orientation from "react-native-orientation-locker"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { InAppNotificationProvider } from "react-native-in-app-notification"
import { color } from "./src/theme"
import { Navigator } from "./src/navigators"
import NetworkDetection from "./src/components/network-detection/network-detection"

declare const global: { HermesInternal: null | {} }
const containerStyle = {
  height: 1,
  backgroundColor: color.light,
}
const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])

  return (
    <SafeAreaProvider mode="margin" style={containerStyle}>
      <InAppNotificationProvider backgroundColour="#E61E2B">
        <StatusBar hidden />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
        <NetworkDetection />
      </InAppNotificationProvider>
    </SafeAreaProvider>
  )
}

export default App
