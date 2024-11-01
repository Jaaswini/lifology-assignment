import { styles } from "./styles"
import { View, Text } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const NoData = () => {
  return (
    <View style={[styles.flex, styles.alignCenter, styles.justifyCenter, styles.fullHeight]}>
      <FontAwesome name="database" size={50} />
      <Text style={[styles.xlText, styles.semiBold]}>No data available</Text>
    </View>
  )
}

export default NoData
