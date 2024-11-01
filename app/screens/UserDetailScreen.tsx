import { getUserPosts } from "@/services/api/getUserPost"
import { styles } from "./styles"
import React, { useEffect, useState } from "react"
import { View, FlatList, TouchableOpacity } from "react-native"
import PostCard from "components/PostCard"
import NoData from "components/NoData"
import Loading from "components/Loading"
import Error from "components/Error"
const UserDetailScreen = (route: any, navigation: any) => {
  console.log("routeee", route)
  const { id } = route?.route?.params || ""
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [error, setError] = useState<Boolean>(false)
  const { posts } = data || []
  useEffect(() => {
    getDataFromApi()
  }, [])
  const getDataFromApi = async () => {
    try {
      const data: any = await getUserPosts(id)
      if (data.status === "SUCCESS") {
        setData(data?.data)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : !error ? (
        <Error onClick={() => getDataFromApi()} />
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
