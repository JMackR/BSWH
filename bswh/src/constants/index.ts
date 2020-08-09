import { Platform } from "react-native"

export const ROOT_URL = Platform.OS === "ios" ? "http:127.0.0.1:3000/data/" : "http://10.0.2.2:3000/data/"
