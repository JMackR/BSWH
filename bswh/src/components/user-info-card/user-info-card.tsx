import * as React from "react"
import { ProfileImage, Text, Touchable } from ".."
import { ListViewProps } from "./user-info-card.props"
import { View, ViewStyle } from "react-native"
import { color, size, styles } from "../../theme"
import { mergeStyles } from "../../utils/styles"

const dateContainerStyle = {
  ...styles.marginLeft,
  alignSelf: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  ...styles.padRight2,
} as ViewStyle

const placeholderStyle = { ...styles.marginTop2, ...styles.marginBottom, marginLeft: size(4) }

const defaultStyle = {
  ...styles.row,
  ...styles.rowAlignCenter,
}
/**
 * Displays a Thread for the user to press
 * @param media_comment
 * @param onPress
 * @param props
 * @constructor
 */
export const UserInfoCard = ({ user_data, onPress, ...props }: ListViewProps) => {
  const style = mergeStyles(props.style)

  return (
    <Touchable
      {...props}
      style={mergeStyles(style, defaultStyle)}
      onPress={() => props.navigation.navigate("TribeMember", { id: user_data.id })}
      delay
    >
      <View style={[styles.rowAlignCenter, styles.marginRight]}>
        <ProfileImage preset="size8" image={user_data?.avatar} />
      </View>
      <View style={mergeStyles(styles.flex, styles.row, styles.justifyBetween, styles.rowAlignCenter)}>
        <View style={mergeStyles(styles.flex, styles.row, styles.justifyBetween, styles.rowAlignCenter)}>
          <Text
            testID="name"
            preset="subheader"
            text={`${user_data.first_name} ${user_data.last_name}`}
            numberOfLines={1}
          />
          <Text testID="message" preset={"title5"} text={user_data.job_title} numberOfLines={2} />
        </View>
        <View style={dateContainerStyle}>
          <Text testID="date" preset="body2" text={user_data.location} />
        </View>
      </View>
    </Touchable>
  )
}
