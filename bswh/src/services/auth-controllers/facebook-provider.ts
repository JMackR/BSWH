import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk"
import auth from "@react-native-firebase/auth"
import { LoginFunctions } from "."

export const FacebookAuth = async prefs => {
  try {
    const result = await LoginManager.logInWithPermissions(["public_profile", "email"])

    if (result.isCancelled) {
      console.log("User cancelled the login process")
      return
    }

    let credential
    const responseInfoCallback = (error, result) => {
      if (error) {
        console.log(error.message)
      } else {
        return LoginFunctions.signInOrLink(
          auth.FacebookAuthProvider.PROVIDER_ID,
          credential,
          result.email,
          prefs,
        )
      }
    }

    let token = await AccessToken.getCurrentAccessToken()
    if (!token) {
      throw "Something went wrong obtaining access token"
    }
    credential = auth.FacebookAuthProvider.credential(token.accessToken)

    const infoRequest = new GraphRequest("/me?fields=name,email", null, responseInfoCallback)
    new GraphRequestManager().addRequest(infoRequest).start()
  } catch (error) {
    console.log(error.message)
  }
}
