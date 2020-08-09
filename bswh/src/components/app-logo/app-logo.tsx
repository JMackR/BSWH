import * as React from "react"
import { ImageSourcePropType, View, Image } from "react-native"
import { presets, AppLogoPresets } from "./app-logo.presets"
import { AppLogoProps } from "./app-logo.props"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"

const defaultImage: Record<AppLogoPresets, ImageSourcePropType> = {
  size4: require("./images/logo-16.png"),
}

/**
 * Displays a directory-screen's logo image,
 *
 */
export const AppLogo = ({ preset: presetName }: AppLogoProps) => {
  const preset = presets[presetName]

  return (
    <View style={mergeStyles(preset.imageSize, styles.alignSelfCenter)}>
      <Image source={defaultImage["size4"]} style={styles.alignSelfCenter} />
    </View>
  )
}
