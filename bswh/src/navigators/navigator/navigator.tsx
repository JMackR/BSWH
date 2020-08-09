import * as React from "react"
import { AuthStackNavigator } from "../auth-navigator"
import { AppNavigator } from "../app-navigator"
import { useAuth } from "../../hooks"
import { AppProvider } from "../../providers/app-provider"

type ContextProps = {
  user: object
}
const initialAuth = {
  user: null,
}

export const AuthContext = React.createContext<ContextProps>(initialAuth)

export const Navigator = () => {
  const { user } = useAuth()
  return user ? (
    <AuthContext.Provider value={user}>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </AuthContext.Provider>
  ) : (
    <AuthStackNavigator />
  )
}
