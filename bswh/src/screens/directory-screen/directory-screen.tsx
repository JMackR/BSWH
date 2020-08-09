import React, { Component, useState } from "react"
import { View, FlatList, ActivityIndicator, Dimensions } from "react-native"
import { UserInfoCard, Text, ErrorBoundary } from "../../components"
import { mergeStyles } from "../../utils/styles"
import { styles } from "../../theme/styles"
import { moderateScale as ms } from "../../utils/scaling"
const { width } = Dimensions.get("window")

export const DirectoryScreen = () => {
  const [users, setUsers] = useState()

  const renderUsers = (dataArray) => ({ item: { node }, index }) => {
    return (
      <View>
        {index === 0 && (
          <View
            style={{
              marginTop: width * 0.05,
              marginBottom: width * 0.02,
            }}
          >
            <Text preset={"body1"} style={{ color: "#3D9DD3" }} text={node.last_name.substring(0, 1)} />
          </View>
        )}
        {node.last_name.charAt(0) > dataArray[index - 1]?.node.last_name.charAt(0) && (
          <View
            style={{
              marginTop: width * 0.05,
              marginBottom: width * 0.02,
            }}
          >
            <Text preset={"body1"} style={{ color: "#3D9DD3" }} text={node.last_name.substring(0, 1)} />
          </View>
        )}
        <UserInfoCard user_data={node} />
      </View>
    )
  }

  return (
    <View style={mergeStyles(styles.flex, styles.padHorizontal, { backgroundColor: "#FFF" })}>
      <Text preset={"body1"} style={[{ paddingTop: ms(8), color: "#3D9DD3" }]} text={"Patient List"} />
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardDismissMode={"on-drag"}
        renderItem={renderUsers(users)}
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
