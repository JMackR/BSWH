import React, { useContext, useEffect } from "react"
import { View, FlatList, Dimensions } from "react-native"
import { UserInfoCard, Text } from "../../components"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"
import { moderateScale as ms } from "../../utils/scaling"
import { useAxios } from "../../hooks/use-axios"
import { URL } from "../../constants"
import { useNavigation } from "@react-navigation/native"
import { AppContext } from "../../providers/app-provider"

const { width } = Dimensions.get("window")

export const DirectoryScreen = () => {
  const [{ data }, setUrl] = useAxios()
  const { navigate } = useNavigation()
  const [user, setSelectedUser] = useContext(AppContext)

  useEffect(() => {
    setUrl(URL)
  }, [])

  const setSelected = (seletedUser) => {
    setSelectedUser(seletedUser)
    navigate("UserDetails")
  }
  /**
   * check and remove any surnames and add lastname object to list object
   * TODO check for other oddball characters
   * @param list
   */
  const sanatizeSort = (list) => {
    if (list) {
      const exp = /(Mr|MR|Ms|Miss|Mrs|Dr|Sir)(\.?)\s/
      const updatedList = list.map((user) => {
        var match = exp.exec(user.name),
          n = ""
        match !== null ? (n = user.name.replace(match[0], "")) : (n = user.name)
        const lastName = n.match(/^\w+\s(.+)/)
        if (lastName !== null) {
          user.lastname = lastName[1]
        }
        return user
      })
      return sortList(updatedList)
    }
  }
  /**
   * sort list by lastname alphabetically
   * @param list
   */
  const sortList = (list) => {
    return list.sort(function (a, b) {
      return a.lastname.localeCompare(b.lastname)
    })
  }

  /**
   * Render list with a character break after lastname changes
   * @param dataArray
   */
  const renderUsers = (dataArray) => ({ item, index }) => {
    return (
      <View>
        {index === 0 && (
          <View
            style={{
              marginTop: width * 0.05,
              marginBottom: width * 0.02,
            }}
          >
            <Text preset={"body1"} style={{ color: "#3D9DD3" }} text={item.lastname.substring(0, 1)} />
          </View>
        )}
        {item.lastname.charAt(0) > dataArray[index - 1]?.lastname?.charAt(0) && (
          <View
            style={{
              marginTop: width * 0.05,
              marginBottom: width * 0.02,
            }}
          >
            <Text preset={"body1"} style={{ color: "#3D9DD3" }} text={item.lastname.substring(0, 1)} />
          </View>
        )}
        <UserInfoCard user_data={item} onPress={setSelected} />
      </View>
    )
  }

  return (
    <View style={mergeStyles(styles.flex, styles.padHorizontal, { backgroundColor: "#FFF" })}>
      <Text preset={"body1"} style={[{ paddingTop: ms(8), color: "#3D9DD3" }]} text={"Patient List"} />
      <FlatList
        data={sanatizeSort(data)}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardDismissMode={"on-drag"}
        renderItem={renderUsers(sanatizeSort(data))}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: width * 0.04 }} />}
        initialNumToRender={3}
        ListEmptyComponent={() => {
          return (
            <View style={{ flex: 1, alignSelf: "center", paddingVertical: 10 }}>
              <Text preset={"body1"} text={"Looks like there were no results"} />
            </View>
          )
        }}
      />
    </View>
  )
}
