import auth from "@react-native-firebase/auth"

export const LoginFunctions = {
  signInOrLink: async function (provider, credential, email, prefs) {
    let user = await auth()
      .signInWithCredential(credential)
      .then((response) => {
        prefs.email = email
        return "success"
      })
      .catch((error) => {
        console.log("error logging in")
      })
    return user
  },

  registerOrLink: async function (provider, credential, email, values) {
    let user = await auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        return "success"
      })
      .catch((error) => {
        console.log("error signing up")
      })
    return user
  },
}
