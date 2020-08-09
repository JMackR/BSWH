import React, { useState, useRef } from "react"
import { View, Platform, TouchableOpacity, Alert } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { BrandView, Icon, Text, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { GoogleAuth, FacebookAuth, AppleAuth, EmailSignIn } from "../../services/auth-controllers"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"

export const LoginScreen = () => {
  const { navigate } = useNavigation()

  /**
   * TODO these functions should be refactored to be it's own custom hook to share with register screen
   */
  const [prefs, setPreferences] = useState({
    agreed_to_terms: false,
    email: "",
    password: "",
  })

  const setUserData = (field: any, value: any) => {
    setPreferences((prefs) => ({
      ...prefs,
      [field]: value,
    }))
  }

  const emailSignIn = () => {
    EmailSignIn(prefs).then((result) => {
      if (result === "success") {
        navigate("Main", { screen: "Directory" })
      } else {
        displayError()
      }
    })
  }

  const socialLogin = (provider: any) => {
    switch (provider) {
      case "Facebook":
        FacebookAuth(prefs).then((result) => {
          if (result === "success") {
            navigate("Walkthrough")
          }
        })
        break
      case "Google":
        GoogleAuth(prefs).then((result) => {
          if (result === "success") {
            navigate("Walkthrough")
          }
        })
        break
      case "Apple":
        AppleAuth(prefs).then((result) => {
          if (result === "success") {
            navigate("Walkthrough")
          }
        })
        break
      default:
        throw new Error("Unsupported SNS" + provider)
    }
  }
  const displayError = () => {
    Alert.alert(
      "Please try again",
      "Check your Email and Password",
      [
        {
          text: "OK",
          onPress: () => console.log("Pressed No"),
          style: "cancel",
        },
      ],
      { cancelable: false },
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <BrandView
        renderNext
        renderSkip
        skipLabel="Cancel"
        nextLabel="Register"
        onPressSkip={() => navigate("Entry")}
        onPress={emailSignIn}
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
          />
          <TextField
            preset={"light"}
            autoCapitalize="none"
            placeholder="Password"
            editable={true}
            secureTextEntry={true}
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
