import auth from "@react-native-firebase/auth"
import { LoginFunctions } from "."

const checkValidEmail = (values) => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let valid = expression.test(values.email?.toLowerCase())
  if (!valid) {
    console.log("Email is not valid")
  }
  return valid
}

const checkValidPassword = (values) => {
  let valid = true
  if (values.password.length < 6) {
    valid = false
    console.log("Password is too short")
  }
  // else if (password != password2) {
  //   valid = false
  //   console.log("Passwords do not match")
  // }
  return valid
}

export const EmailSignIn = async (values) => {
  try {
    if (!checkValidEmail(values)) {
      return
    }
    let credential = auth.EmailAuthProvider.credential(values.email, values.password)
    return LoginFunctions.signInOrLink(auth.EmailAuthProvider.PROVIDER_ID, credential, values.email)
  } catch (error) {
    console.log("Login details not recognised")
  }
}

export const EmailRegistration = async (values) => {
  try {
    if (!checkValidEmail(values)) {
      return
    }
    if (!checkValidPassword(values)) {
      return
    }

    let credential = auth.EmailAuthProvider.credential(values.email, values.password1)
    return LoginFunctions.registerOrLink(auth.EmailAuthProvider.PROVIDER_ID, credential, values.email, values)
  } catch (error) {
    console.log(error.message)
  }
}
