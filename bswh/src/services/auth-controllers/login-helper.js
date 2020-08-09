import auth from "@react-native-firebase/auth"
import AsyncStorage from "@react-native-community/async-storage"
import database from "@react-native-firebase/database"

import { save, load } from "../../utils/storage"
import { default as FireDB } from "../db-controller"
const nodes = ["filters", "saved_items"]

export const LoginFunctions = {
  signInOrLink: async function (provider, credential, email, prefs) {
    const anonymous = await auth().currentUser.isAnonymous
    if (anonymous) {
      await auth().currentUser.delete((result) => {})
    }

    this.saveCredential(provider, credential)

    let user = await auth()
      .signInWithCredential(credential)
      .then((response) => {
        prefs.email = email
        this.migrateData(prefs)
        return "success"
      })
      .catch(async (error) => {
        try {
          if (error.code != "auth/account-exists-with-different-credential") {
            throw error
          }
          let methods = await auth().fetchSignInMethodsForEmail(email)
          let oldCred = await this.getCredential(methods[0])
          let prevUser = await auth().signInWithCredential(oldCred)
          auth().currentUser.linkWithCredential(credential)
          prefs.email = email
          this.migrateData(prefs)
        } catch (error) {
          console.log("this is my error login fyunction", error)
          throw error
        }
      })
    return user
  },

  registerOrLink: async function (provider, credential, email, values) {
    if (auth().currentUser.isAnonymous) {
      await auth().currentUser.delete((result) => {})
    }
    // values.user_uid = this.saveCredential(provider, credential)
    let user = await auth()
      .createUserWithEmailAndPassword(values.email, values.password1)
      .then((response) => {
        this.migrateData(values)
        return "success"
      })
      .catch(async (error) => {
        try {
          if (error.code != "auth/email-already-in-use") {
            throw error
          }
          let methods = await auth().fetchSignInMethodsForEmail(email)
          let oldCred = await this.getCredential(methods[0])

          let prevUser = await auth().signInWithCredential(oldCred)
          await auth().currentUser.linkWithCredential(credential)
          this.migrateData(values)
          return "success"
        } catch (error) {
          throw error
        }
      })
    return user
  },
  migrateData: async function (values) {
    values.password1 = undefined
    const user = await auth().currentUser
    const uuid = await AsyncStorage.getItem("@AnonymousUUID")
    const anonUser = await FireDB.getUserData(uuid)

    return FireDB.migrate(anonUser, user, values)
    /**
     * TODO figure out how to use a map to make it work with less code
     *
     * I think the following is only missing a couple of things:
     * 1. return the promise in the mapping fn
     * 2. call Promise.all on the returned mapping
     *
     * e.g.
     *
     * Promise.all(nodes.map(node => FireDB.getUserData(...)))
     *
     // nodes.map(node => {
    //   console.log("the node is", uuid, node)
    //   FireDB.getUserData(uuid, node).then(result => {
    //     console.log("what is the resylt", result)
    //     if (result) {
    //       console.log("what is the uuid", node, result)
    //       FireDB.updateUserData(user.uid, node, result)
    //     }
    //   })
    // })
     // FireDB.updateUserData(user.uid, "user_info", values).then(() => {
    //   AsyncStorage.getItem("@AnonymousUUID").then(uuid => {
    //     console.log("DO I have uuid", uuid)
    //     // FireDB.deleteAnonymousData(uuid)
    //   })
    // })
     */

    //FireDB.getUserData(uuid, "filters")
    //  .then(filters => {
    //    if (filters) {
    //      FireDB.updateUserData(user.uid, "filters", filters)
    //    }
    //  })
    //  .then(() => {
    //    FireDB.getUserData(uuid, "saved_items").then(items => {
    //      if (items) {
    //        FireDB.updateUserData(user.uid, "saved_items", items).then(() => {
    //          FireDB.deleteAnonymousData(uuid)
    //        })
    //      } else {
    //        FireDB.deleteAnonymousData(uuid)
    //      }
    //    })
    //  })
    //  .then(() => {
    //    FireDB.updateUserData(user.uid, "user_info", values)
    //  })
  },
  getCredential: async function (provider) {
    try {
      let value = await load(provider)
      if (value !== null) {
        let [token, secret] = value
        return this.getProvider(provider).credential(token, secret)
      }
    } catch (error) {
      throw error
    }
  },

  saveCredential: async function (provider, credential) {
    try {
      let saveData = [credential.token, credential.secret]
      const result = await save(provider, saveData)
    } catch (error) {
      throw error
    }
  },

  getProvider: function (providerId) {
    switch (providerId) {
      case auth.GoogleAuthProvider.PROVIDER_ID:
        return auth.GoogleAuthProvider
      case auth.FacebookAuthProvider.PROVIDER_ID:
        return auth.FacebookAuthProvider
      case auth.EmailAuthProvider.PROVIDER_ID:
        return auth.EmailAuthProvider
      default:
        throw new Error(`No provider implemented for ${providerId}`)
    }
  },
}
