import auth from "@react-native-firebase/auth"

export const CreateUser = async () => {
  await auth()
    .signInAnonymously()
    .then(({ user }) => {
      return user
    })
}
