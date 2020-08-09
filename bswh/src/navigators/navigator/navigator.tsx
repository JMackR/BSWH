import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { TabNavigator } from "../tab-navigator"
import { defaultScreenOptions, FullScreenModalOptions } from "../options"
import { AuthStackNavigator } from "../auth-navigator"
import { AppNavigator } from "../app-navigator"
import { useAuth } from "../../hooks"

type ContextProps = {
  user: object
  userData: object
}
const initialState = {
  user: null,
  userData: {},
}

export const AuthContext = React.createContext<ContextProps>(initialState)

export const Navigator = () => {
  const { user } = useAuth()
  return user ? (
    <AuthContext.Provider value={user}>
      <AppNavigator />
    </AuthContext.Provider>
  ) : (
    <AuthStackNavigator />
  )
}
