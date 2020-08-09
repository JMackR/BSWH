import * as React from "react"
import { Image, ImageSourcePropType, View, ViewStyle } from "react-native"
import { presets, ProfileImagePresetNames } from "./profile-image.presets"
import { ProfileImageProps } from "./profile-image.props"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"
import { color, size } from "../../theme"
import { iif } from "../../utils"

const defaultImage: Record<ProfileImagePresetNames, ImageSourcePropType> = {
  size3: require("./images/profile-24.png"),
  size4: require("./images/profile-32.png"),
  size5: require("./images/profile-40.png"),
  size6: require("./images/profile-48.png"),
  size7: require("./images/profile-56.png"),
  size8: require("./images/profile-64.png"),
  size11: require("./images/profile-88.png"),
  size13: require("./images/profile-104.png"),
  size18: require("./images/profile-144.png"),
}

const ringStyle = {
  borderRadius: Number.MAX_SAFE_INTEGER,
  borderWidth: size(1) / 2,
} as ViewStyle

/**
 * Displays a user's profile image, handling a missing profile, default images, loading state
 * Optional Moji to be included alongside
 */
export const ProfileImage = ({ preset: presetName, image, ringColor, style, editIcon }: ProfileImageProps) => {
  const preset = presets[presetName]
  const borderStyle = React.useMemo(() => iif(ringColor, mergeStyles(ringStyle, { borderColor: ringColor })), [
    ringColor,
  ])
  const [loaded, setLoaded] = React.useState(false)
  React.useLayoutEffect(() => {
    if (image) setLoaded(true)
  }, [image])

  return (
    <View style={mergeStyles(preset.imageSize, style)}>
      {image && (
        <>
          <Image
            style={mergeStyles(styles.round, preset.imageSize, borderStyle)}
            source={{ uri: image }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
          />
        </>
      )}

      {!loaded && (
        <>
          <Image source={defaultImage[presetName]} style={styles.aspectRatioSquare} />
        </>
      )}
    </View>
  )
}
