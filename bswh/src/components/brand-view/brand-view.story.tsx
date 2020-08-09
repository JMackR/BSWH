import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, UseCase } from "../../../storybook/views"
import { BrandView } from "./brand-view"
import { Text } from ".."
import { View } from "react-native"
import { size, styles } from "../../theme"

storiesOf("BrandView", module).add("Style Presets", () => (
  <Story>
    <UseCase text="Default">
      <View style={{ height: size(60), width: "100%" }}>
        <BrandView>
          <View style={[styles.flex, styles.center]}>
            <Text preset="body1">Hello world</Text>
          </View>
        </BrandView>
      </View>
    </UseCase>
    <UseCase text="Customize close button">
      <View style={{ height: size(60), width: "100%" }}>
        <BrandView closeTextKey="submit">
          <View style={[styles.flex, styles.center]}>
            <Text preset="body1">Hello world</Text>
          </View>
        </BrandView>
      </View>
    </UseCase>
  </Story>
))
