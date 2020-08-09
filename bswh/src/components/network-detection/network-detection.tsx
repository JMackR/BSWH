import React, { useEffect, useState } from "react"
import NetInfo from "@react-native-community/netinfo"
import { withInAppNotification } from "react-native-in-app-notification"

const NetworkDetection = (props) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        console.log("DISCONNECTED FROM WIFI")
        props.showNotification({
          title: "Your internet connection is unstable.",
          message: "Check your connection and try again.",
        })
      }
    })
    return () => unsubscribe()
  }, [])
  return null
}

export default withInAppNotification(NetworkDetection)
