import * as React from "react"
import { ImageSourcePropType, View, Image } from "react-native"
import { presets, TribeLogoPresetNames } from "./app-logo.presets"
import { AppLogoProps } from "./app-logo.props"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"

const defaultImage: Record<TribeLogoPresetNames, ImageSourcePropType> = {
  size3: require("./images/tribal-icon-16.png"),
  size4: require("./images/tribal-icon-24.png"),
  size5: require("./images/tribal-icon-24.png"),
  size6: require("./images/tribal-icon-32.png"),
  size7: require("./images/tribal-icon-32.png"),
  size8: require("./images/tribal-icon-40.png"),
  size11: require("./images/tribal-icon-40.png"),
  size13: require("./images/tribal-icon-48.png"),
  size18: require("./images/tribal-icon-48.png"),
}

/**
 * Displays a directory-screen's logo image, handling a missing profile, default images, loading state
 *
 */
export const AppLogo = ({ preset: presetName }: AppLogoProps) => {
  const preset = presets[presetName]
  const [loaded, setLoaded] = React.useState(false)

  // React.useLayoutEffect(() => {
  //   if (logo) setLoaded(true)
  // }, [logo])
  return (
    <View style={mergeStyles(preset.imageSize, styles.alignSelfCenter)}>
      {/*{loaded &&  (
        <Image
          style={mergeStyles(preset.imageSize)}
          source={{ uri: logo }}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          resizeMode={"contain"}
        />
      )}*/}

      {!loaded && <Image source={defaultImage["size7"]} style={styles.alignSelfCenter} />}
    </View>
  )
}
