import React, { useEffect } from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Orientation from "react-native-orientation-locker"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { color } from "./src/theme"
import { Navigator } from "./src/navigators"

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
      <StatusBar hidden />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
