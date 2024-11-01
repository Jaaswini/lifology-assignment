import { getUserPosts } from "@/services/api/getUserPost"
import { styles } from "./styles"
import React, { useEffect, useState } from "react"
import { View, ActivityIndicator, FlatList, TouchableOpacity, Text } from "react-native"
import PostCard from "components/PostCard"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import NoData from "components/NoData"
import Loading from "components/Loading"
const UserDetailScreen = (route: any, navigation: any) => {
  console.log("routeee", route)
  const { id } = route?.route?.params || ""
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const { posts } = data || []
  useEffect(() => {
    getDataFromApi()
  }, [])
  console.log("check data", data)
  const getDataFromApi = async () => {
    try {
      const data: any = await getUserPosts(id)
      console.log("data inside", data.status)
      if (data.status === "SUCCESS") {
        setData(data?.data)
        setLoading(false)
      } else {
        console.log("error isnide", data)
        setLoading(false)
      }
    } catch (error) {
      console.log("error while calling function")
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <PostCard data={item} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => <NoData />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default UserDetailScreen
