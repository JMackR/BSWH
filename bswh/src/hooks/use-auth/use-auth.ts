import auth from "@react-native-firebase/auth"
import * as React from "react"

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = auth().currentUser
    return {
      initializing: !user,
      user,
    }
  })

  React.useEffect(() => {
    function onChange(user) {
      if (state.user?.uid !== user?.uid) setState({ initializing: false, user })
    }
    const unsubscribe = auth().onAuthStateChanged(onChange)
    return () => unsubscribe()
  }, [])
  return state
}
