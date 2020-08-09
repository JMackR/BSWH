import React, { useRef, useState, useEffect } from "react"
import { View, FlatList, Dimensions, Animated, ImageBackground, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../../components"
import { styles } from "../../theme/styles"
import { mergeStyles } from "../../utils/styles"
import { frames } from "./enums"

const { width, height } = Dimensions.get("window")

export const WalkThroughScreen = () => {
  const textCarousel = useRef()
  const { navigate } = useNavigation()
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0)

  const opac = new Animated.Value(1)

  const interpolate = opac.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 0.75, 0.3, 0.75, 1],
  })

  useEffect(() => {
    Animated.timing(opac, {
      toValue: Math.round(currentBackgroundIndex),
      useNativeDriver: true,
      duration: 0,
    }).start()
  }, [currentBackgroundIndex])

  return (
    <View>
      <Animated.View
        style={{
          opacity: interpolate,
          elevation: 4,
        }}
      >
        <ImageBackground style={{ width, height: height * 0.64 }} source={frames[currentBackgroundIndex].image}>
          <FlatList
            data={frames}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
            keyExtractor={(item, index) => `frames-${item?.screen}`}
            onScroll={({ nativeEvent }) => {
              const page = Math.abs(nativeEvent.contentOffset.x / width)
              const percentageOfSwipe = page - Math.floor(page)

              setCurrentBackgroundIndex(Math.round(page))

              textCarousel?.current.scrollToOffset({
                animated: false,
                offset: nativeEvent.contentOffset.x,
              })

              Animated.timing(opac, {
                toValue: percentageOfSwipe,
                useNativeDriver: true,
                duration: 0,
              }).start()

              if (page > frames.length - 2) {
                navigate("Directory")
              }
            }}
            renderItem={({ item, index }: { item: { screen: string }; index: number }) => (
              <View key={`frames-${item?.screen}`} style={mergeStyles({ width })}>
                <Image
                  style={mergeStyles(styles.alignCenter, {
                    width,
                    height: width * 1.45,
                    marginTop: width * 0.15,
                    borderRadius: 3,
                  })}
                  resizeMode={"contain"}
                  source={item.screen}
                />
              </View>
            )}
          />
          <View
            style={{
              shadowColor: "black",
              shadowRadius: 4,
              shadowOpacity: 0.1,
              borderBottomWidth: 10,
              borderBottomColor: "white",
              shadowOffset: {
                width: 0,
                height: -10,
              },
            }}
          />
        </ImageBackground>
      </Animated.View>
      <View style={mergeStyles(styles.row, styles.justifyCenter, styles.marginTop2, styles.marginBottom)}>
        {/* Page indicators */}
        {frames.map((element: { desc: string; title: string }, index: number) => {
          if (index === frames.length) return <View style={{ display: "none" }} />
          return (
            <View
              key={element.desc + element.title}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor: currentBackgroundIndex === index ? "#434" : "#ddd",
              }}
            />
          )
        })}
      </View>
      <FlatList
        data={frames}
        ref={textCarousel}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `title-${item.title}`}
        renderItem={({ item }: { item: { title: string; desc: string } }) => (
          <View
            key={`title-${item.title}`}
            style={mergeStyles(styles.flex, styles.alignCenter, styles.padTop3, styles.justifyEvenly, {
              width: width,
              height: width * 0.4,
            })}
          >
            <Text preset="title1" text={item.title} />
            <Text
              style={mergeStyles(styles.marginHorizontal4, styles.alignTextCenter, styles.padTop)}
              preset="body8"
              numberOfLines={5}
              text={item.desc}
            />
          </View>
        )}
      />
    </View>
  )
}
