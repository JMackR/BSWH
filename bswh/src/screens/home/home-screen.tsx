import React, { useEffect, useRef, useState } from "react"
import { ScrollView, View } from "react-native"
import { Button, Dashboard, Text, TextField } from "../../components"
import { useAxios, useCalc } from "../../hooks"
import { mergeStyles, numberValidation } from "../../utils"
import { styles } from "../../theme/styles"

const containerStyle = {
  ...styles.padTop3,
}

const titleContainer = {
  ...styles.padVertical3,
  ...styles.alignSelfCenter,
}

const inputContainer = {
  ...styles.padVertical3,
  ...styles.padHorizontal2,
}

const dashboardContainer = {
  ...styles.padVertical3,
}

const buttonStyle = {
  width: 150,
  ...styles.margin,
}

export const Home = () => {
  const inputRef = useRef(null)

  const [{ data }, setUrl] = useAxios()
  const [{ dataSet, numbers }, setDataSet] = useCalc()

  const [inputValue, setInput] = useState("")

  useEffect(() => {
    if (data?.length > 0) setDataSet(data)
  }, [data])

  useEffect(() => {
    setUrl("data2")
  }, [])

  const submitNumber = () => {
    const validNumber = numberValidation(inputValue)
    if (validNumber.length > 0) {
      setDataSet([...dataSet, parseInt(inputValue)])
    }
    setInput("")
    inputRef.current.focus()
  }
  const submitDataSet = (url) => {
    setUrl(url)
  }
  return (
    <ScrollView contentContainerStyle={containerStyle}>
      <View style={titleContainer}>
        <Text preset={"title1"} text={"Baylor Scott & White Health"} color={"white"} />
      </View>
      <View style={inputContainer}>
        <TextField
          testID="datapoint"
          forwardedRef={inputRef}
          preset={"dark"}
          style={{ borderRadius: 30 }}
          placeholder="Add a Number"
          onChangeText={(text) => setInput(text)}
          autoCapitalize="none"
          value={inputValue}
          onSubmitEditing={() => {
            submitNumber()
          }}
        />
      </View>
      <View style={dashboardContainer}>
        <Dashboard testID="dashboard" numbers={numbers} />
      </View>
      <View style={mergeStyles(styles.rowAlignCenter, styles.alignSelfCenter)}>
        <Button
          style={buttonStyle}
          preset="brand"
          textStyle={{ color: "black" }}
          onPress={() => submitDataSet("data2")}
          text={"Data Set 1"}
        />
        <Button style={buttonStyle} preset="brand" onPress={() => submitDataSet("data1")} text={"Data Set 2"} />
      </View>
    </ScrollView>
  )
}
