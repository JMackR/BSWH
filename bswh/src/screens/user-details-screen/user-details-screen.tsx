import React, { useContext } from "react"
import { View } from "react-native"
import { Text } from "../../components"
import { ProfileImage } from "../../components/profile-image/profile-image"
import { styles } from "../../theme/styles"
import { mergeStyles } from "../../utils/styles"
import { AppContext } from "../../providers/app-provider"

const profileContainer = {
  ...styles.alignSelfCenter,
  ...styles.padVertical2,
}

const propExists = (obj, path) => {
  if (obj)
    return path.split(".").reduce((obj, prop) => {
      return obj[prop]
    }, obj)
}

export const UserDetailsScreen = () => {
  const [{ user }] = useContext(AppContext)
  return (
    <View style={mergeStyles(styles.marginHorizontal)}>
      <View style={profileContainer}>
        <ProfileImage preset={"size18"} image={user?.avatar} />
      </View>
      <View style={styles.padHorizontal2}>
        <Text
          style={mergeStyles(styles.alignSelfCenter, styles.padBottom3)}
          preset={"title1"}
          color={"black"}
          text={propExists(user, "name")}
        />
        <View style={mergeStyles(styles.rowAlignCenter, styles.justifyBetween)}>
          <Text preset={"body1"} text={"Company:"} />
          <Text preset={"body1"} text={propExists(user, "company.name")} />
        </View>
        <View style={mergeStyles(styles.padVertical3)}>
          <Text preset={"title1"} color={"black"} text={"Contact Info"} />
          <View style={mergeStyles(styles.rowAlignCenter, styles.justifyBetween)}>
            <Text preset={"body1"} text={"Email:"} />
            <Text preset={"body1"} text={propExists(user, "email")} />
          </View>
          <View
            style={mergeStyles(styles.rowAlignCenter, styles.justifyBetween, styles.alignStart, styles.padVertical3)}
          >
            <Text preset={"body1"} text={"Address:"} />
            <View style={mergeStyles(styles.justifyEnd)}>
              <Text preset={"body1"} text={propExists(user, "address.street")} />
              <Text preset={"body1"} text={propExists(user, "address.suite")} />
              <Text preset={"body1"} text={propExists(user, "address.city")} />
              <Text preset={"body1"} text={propExists(user, "address.zip")} />
            </View>
          </View>
          <View style={mergeStyles(styles.rowAlignCenter, styles.justifyBetween)}>
            <Text preset={"body1"} text={"Phone:"} />
            <Text preset={"body1"} text={propExists(user, "phone")} />
          </View>
        </View>
      </View>
      <View style={mergeStyles(styles.padHorizontal2, styles.padVertical3)}>
        <Text preset={"title1"} color={"black"} text={"Other Information:"} />
        <View style={mergeStyles(styles.rowAlignCenter, styles.justifyBetween)}>
          <Text preset={"body1"} text={"UserName:"} />
          <Text preset={"body1"} text={propExists(user, "username")} />
        </View>
        <View style={mergeStyles(styles.rowAlignCenter, styles.justifyBetween)}>
          <Text preset={"body1"} text={"Website:"} />
          <Text preset={"body1"} text={propExists(user, "website")} />
        </View>
      </View>
    </View>
  )
}
