import * as React from "react"
export interface SelectedUser {
  user: object
}
export const useSelectedUser = (): SelectedUser => {
  const [selectedUser, setSelectedUser] = React.useState(undefined)

  const [user, setData] = React.useState()

  const execute = React.useCallback(() => {
    return setData(selectedUser)
  }, [selectedUser])

  React.useEffect(() => {
    if (selectedUser) {
      execute()
    }
  }, [execute, selectedUser])
  return [{ user }, setSelectedUser]
}
