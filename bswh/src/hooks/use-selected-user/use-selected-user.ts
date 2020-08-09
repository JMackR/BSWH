import * as React from "react"
export interface SelectedUser {
  user: object
}
export const useSelectedUser = (user): SelectedUser => {
  const [selectedUser, setSelectedUser] = React.useState(undefined)

  React.useEffect(() => {
    setSelectedUser(user)
    return () => setSelectedUser(undefined)
  }, [])

  return selectedUser
}
