import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { LoginScreen, RegisterScreen, WalkThroughScreen, EntryScreen } from "../../screens"
import { FullScreenModalOptions } from "../options"

const Stack = createStackNavigator()

export const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={"Entry"} headerMode="none">
      <Stack.Screen name={"Entry"} component={EntryScreen} options={FullScreenModalOptions} />
      <Stack.Screen name={"Login"} component={LoginScreen} options={FullScreenModalOptions} />
      <Stack.Screen name={"Register"} component={RegisterScreen} options={FullScreenModalOptions} />
      <Stack.Screen name={"WalkThrough"} component={WalkThroughScreen} options={FullScreenModalOptions} />
    </Stack.Navigator>
  )
}
