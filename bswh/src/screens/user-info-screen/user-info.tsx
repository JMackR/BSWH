import React, { useState } from "react"
import { View, ActivityIndicator } from "react-native"
import { Text } from "../../components"
import { ProfileImage } from "../../components/profile-image/profile-image"
import { styles } from "../../theme/styles"
import { mergeStyles } from "../../utils/styles"

const profileContainer = {
  ...styles.alignSelfCenter,
  ...styles.padVertical2,
}
export const UserInfo = () => {
  const [user, setUser] = useState()
  return (
    <View preset={"fixed"} style={mergeStyles(styles.marginHorizontal)}>
      <View style={profileContainer}>
        <ProfileImage preset={"size18"} image={user?.avatar} />
      </View>
      <View style={styles.padHorizontal2}>
        <Text preset={"title1"} color={"black"} text={`${user?.first_name} ${user?.last_name}`} />
        <Text preset={"body1"} text={user?.job_title} />
        <Text preset={"body1"} text={user?.bio} />
        <Text preset={"body1"} text={"My Contact Info"} />
        <Text preset={"body1"} text={"Phone:"} />
        <Text preset={"body1"} text={user?.phone} />
        <Text preset={"body1"} text={"Email:"} />
        <Text preset={"body1"} text={user?.email} />
      </View>
    </View>
  )
}
