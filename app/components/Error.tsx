import { ERROR_MSG, PLS_TRY_AGAIN } from "@/assets/constants"
import { styles } from "./styles"
import { View, Text, TouchableOpacity } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Error = (props: any) => {
  const { onClick } = props
  return (
    <View
      style={[
        styles.flex,
        styles.alignCenter,
        styles.justifyCenter,
        styles.fullHeight,
        styles.gap20,
      ]}
    >
      <FontAwesome name="exclamation-circle" size={50} />
      <Text style={[styles.xlText, styles.semiBold]}>{ERROR_MSG}</Text>
      <TouchableOpacity style={[styles.btn]} onPress={onClick}>
        <Text style={[styles.lgText, styles.semiBold]}>{PLS_TRY_AGAIN}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Error
