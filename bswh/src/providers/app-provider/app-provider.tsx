import * as React from "react"
import { useSelectedUser } from "../../hooks/use-selected-user"

type ContextProps = {
  user: object
}

const initialState = {
  user: null,
}

export const AppContext = React.createContext<ContextProps>(initialState)

export const AppProvider = React.memo((props) => {
  const { children } = props
  const [{ user }, setSelectedUser] = useSelectedUser()
  const itemContext = [
    {
      user,
    },
    setSelectedUser,
  ]

  return <AppContext.Provider value={itemContext}>{children}</AppContext.Provider>
})
