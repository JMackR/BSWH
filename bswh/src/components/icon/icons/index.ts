/* eslint-disable quote-props */
/** DO NOT MODIFY This file is generated with `yarn generate:icons` */
import { ImageSourcePropType } from "react-native"

export interface IconResourceDefinition {
  extraSmall: ImageSourcePropType
  small: ImageSourcePropType
  medium: ImageSourcePropType
  large: ImageSourcePropType
  extraLarge: ImageSourcePropType
}

export type IconSize = keyof IconResourceDefinition

export const icons = {
  "chart-icon": {
    small: require("./chart-icon-16.png"),
  } as IconResourceDefinition,
  "facebook-login": {
    small: require("./facebook-login-16.png"),
  } as IconResourceDefinition,
  search: {
    small: require("./search-24.png"),
  } as IconResourceDefinition,
  account: {
    small: require("./account-24.png"),
  } as IconResourceDefinition,
  crown: {
    small: require("./crown-24.png"),
  } as IconResourceDefinition,
  "sort-icon-asc": {
    small: require("./sort-indicator-asc-24.png"),
  } as IconResourceDefinition,
  "sort-icon-desc": {
    small: require("./sort-indicator-desc-24.png"),
  } as IconResourceDefinition,
  "arrow-right": {
    small: require("./arrow-right-24.png"),
  } as IconResourceDefinition,
  "facebook-icon": {
    small: require("./facebook-icon-24.png"),
  } as IconResourceDefinition,
  "google-icon": {
    small: require("./google-icon-24.png"),
  } as IconResourceDefinition,
  "apple-icon": {
    small: require("./apple-icon-24.png"),
  } as IconResourceDefinition,
}

export type IconTypes = keyof typeof icons
