import { Platform } from "react-native"

export const ROOT_URL = Platform.OS === "ios" ? "http:127.0.0.1:3000/data/" : "http://10.0.2.2:3000/data/"

import blueWave from "./images/blue-wave.png"
import whiteWave from "./images/white-wave.png"

import inspireScreen from "./images/inspire-screen.png"
import storyScreen from "./images/search-screen.png"

export const frames = [
  {
    title: "INSPIRE YOUR PEOPLE",
    desc:
      "TRIBAL is a relationship and community-building platform that helps leaders connect with, grow, and inspire their people.",
    image: blueWave,
    screen: inspireScreen,
  },
  {
    title: "WE ALL HAVE A STORY",
    desc:
      "So why not tell yours? TRIBAL uses strategic storytelling to enable and enhance meaningful relationships across all levels of the organization.",
    image: whiteWave,
    screen: storyScreen,
  },
  {},
]
