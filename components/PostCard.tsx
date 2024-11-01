import React from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"
import FontAwesome from "react-native-vector-icons/FontAwesome"
const PostCard = (props: any) => {
  const { data } = props
  return (
    <View style={styles.userCardContainer}>
      <View
        style={[styles.row, styles.justifyBetween, { alignItems: "flex-start", width: "100%" }]}
      >
        <Text style={[styles.xlText, styles.semiBold]}>{data?.title}</Text>
        <View style={[styles.alignCenter, styles.gap5, { marginTop: 4 }]}>
          <FontAwesome name="eye" size={18} color="#000" />
          <Text style={[styles.smText]}>{data?.views}</Text>
        </View>
      </View>
      <Text style={[styles.lgText, styles.normal, styles.grayText]}>{data?.body}</Text>
      <View style={[styles.row, styles.gap10]}>
        {data?.tags.map((item: any) => (
          <Text style={[styles.tag, styles.mdText, styles.normal]}>{item}</Text>
        ))}
      </View>
      <View style={[styles.row, styles.alignCenter, styles.justifyBetween]}>
        <View style={[styles.row, styles.alignCenter, styles.gap10]}>
          <FontAwesome name="thumbs-up" size={25} color="#000" />
          <Text>{data?.reactions?.likes}</Text>
        </View>
        <View style={[styles.row, styles.alignCenter, styles.gap10]}>
          <FontAwesome name="thumbs-down" size={25} color="#000" />
          <Text>{data?.reactions?.dislikes}</Text>
        </View>
      </View>
    </View>
  )
}

export default PostCard
