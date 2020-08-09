import React, { useState, useContext, useRef } from "react"
import { View, Platform, r, TouchableOpacity } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { BrandView, Icon, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { GoogleAuth, FacebookAuth, AppleAuth, EmailSignIn } from "../../services/auth-controllers"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"

interface UserData {
  email: string
  password1: string
}

export const LoginScreen = () => {
  const passwordRef = useRef(null)
  const { goBack, navigate } = useNavigation()
  const [values, setValues] = useState({
    email: "",
    password1: "",
  } as UserData)

  const [isVisible, setPasswordVisible] = useState(false)

  const showPassword = () => {
    setPasswordVisible({
      hidePassword: !isVisible,
    })
  }
  const emailSignIn = () => {
    EmailSignIn(values).then((result) => {
      if (result === "success") {
        goBack()
      }
    })
  }

  const setUserData = (field: any, value: any) => {
    setValues((values) => ({
      ...values,
      [field]: value,
    }))
  }

  const socialLogin = (provider: any) => {
    switch (provider) {
      case "Facebook":
        FacebookAuth().then((result) => {
          if (result === "success") {
            goBack()
          }
        })
        break
      case "Google":
        GoogleAuth().then((result) => {
          if (result === "success") {
            goBack()
          }
        })
        break
      case "Apple":
        AppleAuth().then((result) => {
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
      <BrandView
        renderNext
        renderSkip
        skipLabel="Cancel"
        nextLabel="Log In"
        onPressSkip={() => navigate("Entry")}
        // onPress={this.handleAWSLogin}
      >
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={mergeStyles(styles.flex, styles.justifyCenter, styles.padHorizontal3)}
          enableAutomaticScroll={Platform.OS === "ios"}
          bounces={false}
        >
          <Text style={styles.padBottom} preset="title1" text="Log In" />
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
            onSubmitEditing={() => emailSignIn()}
          />
          <View
            style={mergeStyles(styles.padTop3, styles.rowAlignCenter, styles.alignSelfCenter, styles.justifyAround, {
              width: "100%",
            })}
          >
            <TouchableOpacity onPress={() => socialLogin("Facebook")}>
              <Icon
                name={"facebook-icon"}
                style={mergeStyles(styles.padVertical2, styles.alignSelfCenter, styles.padHorizontal2, {
                  width: 48,
                  height: 48,
                })}
                size={"small"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => socialLogin("Google")}>
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
              <TouchableOpacity onPress={() => socialLogin("Apple")}>
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
