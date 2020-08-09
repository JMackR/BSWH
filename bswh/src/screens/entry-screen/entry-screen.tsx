import React, { useEffect } from "react"
import { TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AppLogo, Text } from "../../components"
import { styles } from "../../theme/styles"
import { mergeStyles } from "../../utils/styles"

const buttonStyle = {
  borderWidth: 1,
  borderColor: "#409bd3",
  borderRadius: 10,
  height: 50,
  width: "100%",
  maxWidth: 375,
}
export const EntryScreen = () => {
  const { navigate } = useNavigation()
  return (
    <View style={mergeStyles(styles.flex)}>
      <View style={mergeStyles(styles.flex, styles.justifyEvenly)}>
        <AppLogo style={styles.alignSelfCenter} preset={"size4"} />
        <Text
          numberOfLines={2}
          preset="body4"
          style={mergeStyles(styles.alignTextCenter, styles.marginBottom2)}
          text={"Stories that inspire. Resources that equip.\nRelationships that empower."}
        />
      </View>
      <View style={mergeStyles(styles.flex)} />
      <View style={mergeStyles(styles.flex, styles.justifyCenter, styles.alignCenter, styles.marginHorizontal4)}>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={mergeStyles(styles.justifyCenter, styles.alignCenter, styles.marginBottom2, buttonStyle)}
        >
          <Text color="#409bd3" text="Log In" preset="body2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Register")}>
          <Text
            color="red"
            text="Need to Register?"
            preset="body4"
            style={mergeStyles(styles.alignTextCenter, styles.marginTop2)}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
