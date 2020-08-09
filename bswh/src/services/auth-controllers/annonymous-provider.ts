import auth from "@react-native-firebase/auth"
import AsyncStorage from "@react-native-community/async-storage"
import { default as FireDB } from "../db-controller"

export const CreateUser = async () => {
  await auth()
    .signInAnonymously()
    .then(({ user }) => {
      FireDB.initializeUser(user.uid)
      AsyncStorage.setItem("@AnonymousUUID", user.uid)
    })
}
