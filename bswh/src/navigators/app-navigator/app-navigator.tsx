import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppLogo } from "../../components"
import { defaultScreenOptions, FullScreenModalOptions, NavigationBackButton } from "../options"
import { DirectoryScreen, UserDetailsScreen, WalkThroughScreen } from "../../screens"

const Stack = createStackNavigator()
export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"WalkThrough"}>
      <Stack.Screen name={"WalkThrough"} component={WalkThroughScreen} options={FullScreenModalOptions} />
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
        name="UserDetails"
        component={UserDetailsScreen}
        options={() => ({
          ...defaultScreenOptions,
          headerLeft: (_) => <NavigationBackButton />,
          headerTitle: (_) => <AppLogo preset={"size4"} />,
        })}
      />
    </Stack.Navigator>
  )
}
