import { useEffect, useState } from "react"
import { View, TouchableOpacity, FlatList, Text, ActivityIndicator } from "react-native"
import { getUsers } from "@/services/api/getUsers"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import UserCard from "components/UserCard"
import { styles } from "./styles"
import NoData from "components/NoData"
import Loading from "components/Loading"

export const WelcomeScreen = ({ navigation }: { navigation: NativeStackNavigationProp<any> }) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const { users } = data || []
  useEffect(() => {
    getDataFromApi()
  }, [])
  const getDataFromApi = async () => {
    try {
      const data: any = await getUsers()
      if (data.status === "SUCCESS") {
        setData(data?.data)
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("UserDetailScreen", { id: item?.id })}
            >
              <UserCard data={item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <NoData />}
        />
      )}
    </View>
  )
}
