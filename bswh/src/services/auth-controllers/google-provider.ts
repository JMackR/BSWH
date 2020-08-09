import auth from "@react-native-firebase/auth"
import { GoogleSignin, statusCodes } from "@react-native-community/google-signin"
import { LoginFunctions } from "."

const webClientId = "367334642675-9ug6nuparbpki0v8sojulpbakemge747.apps.googleusercontent.com"

export const GoogleAuth = async (prefs) => {
  try {
    GoogleSignin.configure({
      webClientId: webClientId,
      scopes: ["email", "profile"],
    })

    const data = await GoogleSignin.signIn()
    let credential = auth.GoogleAuthProvider.credential(data.idToken)

    return LoginFunctions.signInOrLink(auth.GoogleAuthProvider.PROVIDER_ID, credential, data.user.email, prefs)
  } catch (error) {
    console.log(error)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}
