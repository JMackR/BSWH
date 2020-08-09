import React from "react"
import database from "@react-native-firebase/database"
import { createUserInfo } from "./models/user-info"

export const initializeUser = async uuid => {
  const user_data = createUserInfo()
  try {
    await database()
      .ref(`/users/${uuid}/user_info/`)
      .set(user_data)
      .then(() => {
        return true
      })
      .catch(error => {
        console.log("set user profile, error.message", error.message)
      })
  } catch (e) {
    console.log("what is the error", e)
  }
}
export const getUserData = async (uuid, node) => {
  try {
    const data = await database()
      .ref(`users/${uuid}/${node}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.exists()) {
          return snapshot.val()
        }
      })
      .catch(err => console.log(err))
    return data
  } catch (e) {
    console.log(" ERROR RETRIEVING USER DATA", e)
  }
}

export const updateUserData = async (uuid, node, data) => {
  try {
    await database()
      .ref(`users/${uuid}/${node}`)
      .update(data)
      .then(success => {
        return true
      })
      .catch(err => {
        console.log(" ERROR UPDATING USER SESSIONS", err)
      })
  } catch (e) {
    console.log(" ERROR UPDATING USER SESSIONS IN CATCH", e)
  } finally {
  }
}
export const deleteUserData = async (uuid, node, item) => {
  try {
    await database()
      .ref(`users/${uuid}/${node}/${item}`)
      .remove()
      .catch(err => {
        console.log(" ERROR UPDATING USER SESSIONS", err)
      })
  } catch (e) {
    console.log(" ERROR UPDATING USER SESSIONS IN CATCH", e)
  } finally {
  }
}
export const deleteAnonymousData = async uuid => {
  await database()
    .ref(`users/${uuid}`)
    .remove()
}
export default { initializeUser, updateUserData, getUserData, deleteUserData, deleteAnonymousData }
