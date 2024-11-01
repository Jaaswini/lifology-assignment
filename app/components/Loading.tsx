import React from "react"
import { styles } from "./styles"
import { ActivityIndicator, View } from "react-native"

const Loading = () => {
  return (
    <View style={[styles.flex, styles.justifyCenter, styles.alignCenter, styles.fullHeight]}>
      <ActivityIndicator size="large" color="#758694" />
    </View>
  )
}

export default Loading
