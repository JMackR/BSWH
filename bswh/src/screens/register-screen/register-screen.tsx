import React, { useState, useContext, useRef } from "react"
import { View, Platform, Keyboard, Image, TouchableOpacity } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { BrandView, Icon, PasswordField, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import CheckBox from "react-native-check-box"
import { GoogleAuth, FacebookAuth, AppleAuth, EmailRegistration } from "../../services/auth-controllers"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"
import { color } from "../../theme"

const border = {
  borderWidth: 1,
  borderColor: "#F7F7F7",
}
interface UserData {
  email: string
  password1: string
}

export const RegisterScreen = () => {
  const passwordRef = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const { goBack, navigate } = useNavigation()
  const [values, setValues] = useState({
    email: "",
    password1: "",
  } as UserData)

  const [isVisible, setPasswordVisible] = useState(false)

  const [prefs, setPreferences] = useState({
    agreed_to_terms: false,
  })
  const handleToggle = (notif_type) => {
    const nextState = !prefs[notif_type]

    setPreferences({ ...prefs, [notif_type]: nextState })
  }
  const emailRegistration = () => {
    EmailRegistration(prefs).then((result) => {
      if (result === "success") {
        goBack()
      }
    })
  }

  const setUserData = (field: any, value: any) => {
    setPreferences((prefs) => ({
      ...prefs,
      [field]: value,
    }))
  }

  const socialLogin = (provider: any) => {
    switch (provider) {
      case "Facebook":
        FacebookAuth(prefs).then((result) => {
          if (result === "success") {
            goBack()
          }
        })
        break
      case "Google":
        GoogleAuth(prefs).then((result) => {
          if (result === "success") {
            goBack()
          }
        })
        break
      case "Apple":
        AppleAuth(prefs).then((result) => {
          if (result === "success") {
            goBack()
          }
        })
        break
      default:
        throw new Error("Unsupported SNS" + provider)
    }
  }

  return (
    <View>
      <BrandView>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={Platform.OS === "ios" ? 100 : 6}
          onTouchStart={() => Keyboard.dismiss()}
          style={mergeStyles(styles.padTop3, styles.padBottom3, color.light, styles.flex)}
          enableOnAndroid={true}
          scrollEnabled={true}
          enableAutomaticScroll={true}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={mergeStyles(styles.flex, styles.margin, styles.pad, {
              borderWidth: 1,
              borderColor: "#F7F7F7",
            })}
          >
            <TextField
              preset={"light"}
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="Email"
              editable={true}
              onChangeText={(text) => setUserData("email", text)}
              keyboardType="email-address"
              style={styles.marginBottom2}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <TextField
              forwardedRef={passwordRef}
              preset={"light"}
              autoCapitalize="none"
              placeholder="Password"
              editable={true}
              togglePassword={() => showPassword()}
              showPassword={isVisible}
              secureTextEntry={isVisible}
              onChangeText={(text) => setUserData("password", text)}
              onSubmitEditing={() => emailRegistration()}
            />
          </View>
          <View style={{ height: 50 }} />
          <CheckBox
            style={mergeStyles(styles.padVertical)}
            onClick={() => handleToggle("agreed_to_terms")}
            isChecked={prefs.agreed_to_terms}
            rightText="Agree to T&Cs and Privacy Policy. (required)"
            rightTextStyle={styles.h3}
          />
          <TouchableOpacity
            style={mergeStyles(styles.justifyCenter, styles.alignCenter, styles.marginBottom2, styles.marginVertical3, {
              borderWidth: 2,
              borderColor: "#7CE2CB",
              borderRadius: 10,
              height: 50,
              width: "100%",
              maxWidth: 375,
              backgroundColor: "white",
            })}
            disabled={!prefs.agreed_to_terms}
            onPress={() => emailRegistration()}
          >
            <Text preset="body5" text="Register with Email" color={"#7CE2CB"} />
          </TouchableOpacity>
          <View
            style={mergeStyles(styles.padTop3, styles.rowAlignCenter, styles.alignSelfCenter, styles.justifyAround, {
              width: "100%",
            })}
          >
            <TouchableOpacity onPress={() => socialLogin("Facebook")} disabled={!prefs.agreed_to_terms}>
              <Icon
                name={"facebook-icon"}
                style={mergeStyles(styles.padVertical2, styles.alignSelfCenter, styles.padHorizontal2, {
                  width: 48,
                  height: 48,
                })}
                size={"small"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => socialLogin("Google")} disabled={!prefs.agreed_to_terms}>
              <Icon
                name={"google-icon"}
                style={mergeStyles(styles.padVertical2, styles.alignSelfCenter, styles.padHorizontal2, {
                  width: 48,
                  height: 48,
                })}
                size={"small"}
              />
            </TouchableOpacity>
            {Platform.OS === "ios" && (
              <TouchableOpacity onPress={() => socialLogin("Apple")} disabled={!prefs.agreed_to_terms}>
                <Icon
                  name={"apple-icon"}
                  style={mergeStyles(styles.padVertical2, styles.alignSelfCenter, styles.padHorizontal2, {
                    width: 48,
                    height: 48,
                  })}
                  size={"small"}
                />
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAwareScrollView>
      </BrandView>
    </View>
  )
}
