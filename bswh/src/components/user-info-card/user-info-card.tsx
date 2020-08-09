import * as React from "react"
import { ProfileImage, Text, Touchable } from ".."
import { ListViewProps } from "./user-info-card.props"
import { View } from "react-native"
import { styles } from "../../theme"
import { mergeStyles } from "../../utils/styles"

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
    <Touchable {...props} style={mergeStyles(style, defaultStyle)} onPress={() => onPress(user_data)} delay>
      <View style={[styles.rowAlignCenter, styles.marginRight]}>
        <ProfileImage preset="size8" image={user_data?.avatar} />
      </View>

      <View style={mergeStyles(styles.flex, styles.justifyBetween)}>
        <Text testID="name" preset="subheader" text={`${user_data.name}`} numberOfLines={1} />
        <Text testID="message" preset={"title5"} text={user_data.email} numberOfLines={2} />
      </View>
    </Touchable>
  )
}
