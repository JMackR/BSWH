import { Platform } from "react-native"

export const ROOT_URL = Platform.OS === "ios" ? "http:127.0.0.1:3000/data/" : "http://10.0.2.2:3000/data/"

import blueWave from "./images/blue-wave.png"
import whiteWave from "./images/single-wave.png"

import inspireScreen from "./images/list.png"
import storyScreen from "./images/details.png"

export const frames = [
  {
    title: "SAY HELLO TO BETTER.",
    desc: "Find Dr. Right®, schedule an appointment, search for same-day care near you and more.",
    image: blueWave,
    screen: inspireScreen,
  },
  {
    title: "STAY CONNECTED TO YOUR HEALTH.",
    desc: "Access all your health information in one place.",
    image: whiteWave,
    screen: storyScreen,
  },
  {},
]
