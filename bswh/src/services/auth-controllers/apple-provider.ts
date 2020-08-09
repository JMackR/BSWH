import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from "@invertase/react-native-apple-authentication"
import auth from "@react-native-firebase/auth"
import { LoginFunctions } from "."

export const AppleAuth = async prefs => {
  // Start the sign-in request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
  })

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw "Apple Sign-In failed - no identify token returned"
  }

  // Create a Firebase credential from the response
  const { identityToken, nonce } = appleAuthRequestResponse
  const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce)

  // Sign the user in with the credential
  return LoginFunctions.signInOrLink(
    auth.GoogleAuthProvider.PROVIDER_ID,
    appleCredential,
    appleAuthRequestResponse.email,
    prefs,
  )
}
