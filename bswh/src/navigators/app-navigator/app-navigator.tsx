import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppLogo } from "../../components"
import { defaultScreenOptions, NavigationBackButton } from "../options"
import { DirectoryScreen, UserInfo } from "../../screens"

const Stack = createStackNavigator()
export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions} initialRouteName={"Directory"}>
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={() => ({
          ...defaultScreenOptions,
          headerLeft: (_) => null,
          headerTitle: (_) => <AppLogo preset={"size4"} />,
        })}
      />
      <Stack.Screen
        name="User Info"
        component={UserInfo}
        options={() => ({
          ...defaultScreenOptions,
          headerLeft: (_) => <NavigationBackButton />,
          headerTitle: (_) => <AppLogo preset={"size4"} />,
        })}
      />
    </Stack.Navigator>
  )
}
