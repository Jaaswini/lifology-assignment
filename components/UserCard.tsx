import React from "react"
import { View, Text, Image } from "react-native"
import { styles } from "./styles"

const UserCard = (props: any) => {
  const { data } = props
  return (
    <View style={[styles.userCardContainer, styles.row, styles.alignCenter]}>
      <Image style={styles.profileImg} source={{ uri: data?.image }} />
      <View style={styles.textContainer}>
        <Text style={[styles.lgText, styles.semiBold]}>{data?.firstName}</Text>
        <Text style={[styles.grayText, styles.mdText]}>{data?.role}</Text>
        <Text style={[styles.grayText, styles.mdText]}>{data?.email}</Text>
      </View>
    </View>
  )
}

export default UserCard
