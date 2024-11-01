import { useEffect, useState } from "react"
import { View, TouchableOpacity, FlatList } from "react-native"
import { getUsers } from "@/services/api/getUsers"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import UserCard from "@/components/UserCard"
import { styles } from "./styles"
import NoData from "@/components/NoData"
import Loading from "@/components/Loading"
import Error from "@/components/Error"
import { SUCCESS, USER_DETAIL_SCREEN } from "@/assets/constants"

export const UserHomeScreen = ({ navigation }: { navigation: NativeStackNavigationProp<any> }) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [error, setError] = useState<Boolean>(false)
  const { users } = data || []
  useEffect(() => {
    getDataFromApi()
  }, [])
  const getDataFromApi = async () => {
    setError(false)
    try {
      const data: any = await getUsers()
      if (data.status === SUCCESS) {
        setData(data?.data)
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error onClick={() => getDataFromApi()} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(USER_DETAIL_SCREEN, { id: item?.id })}
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
