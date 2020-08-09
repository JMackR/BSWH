import * as React from "react"
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from "react-native"

import { AppLogo, Text, Touchable } from "../"
import { styles } from "../../theme/styles"
import { globals } from "../../theme"
import { BrandViewProps } from "./brand-view.props"
import { mergeStyles } from "../../utils/styles"

/**
 * The view which display brand as header and a close button, children will be displayed between close and header
 */
export const BrandView = ({
  onPress,
  onPressSkip,
  version,
  children,
  closeTextKey,
  renderSkip,
  renderNext,
  skipLabel = "Skip",
  skipDisabled = false,
  nextDisabled,
  nextLabel = "Next",
}: BrandViewProps) => {
  return (
    <View style={mergeStyles(styles.flex)}>
      <View style={mergeStyles(styles.height(18), styles.center, styles.padTop2, styles.row)}>
        <Text
          preset={"caption"}
          style={mergeStyles(styles.marginHorizontal, styles.absoluteTopLeft)}
          color={"#ccc"}
          text={version}
        />
        <View style={mergeStyles(styles.flex, styles.center)}>
          {renderSkip && (
            <Touchable disabled={skipDisabled} onPress={onPressSkip}>
              <Text preset={"body1"} color={"#E61E2B"} text={skipLabel} />
            </Touchable>
          )}
        </View>
        <AppLogo preset={"size6"} />
        <View style={mergeStyles(styles.flex, styles.center)}>
          {renderNext && (
            <Touchable disabled={nextDisabled} onPress={onPress}>
              <Text preset={"body1"} color={"#409BD3"} text={nextLabel} />
            </Touchable>
          )}
        </View>
      </View>
      <View style={styles.flex}>{children}</View>
    </View>
  )
}
