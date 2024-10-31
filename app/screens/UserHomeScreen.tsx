import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { getUsers } from "@/services/api/getUsers"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export const WelcomeScreen = ({ navigation }: { navigation: NativeStackNavigationProp<any> }) => {
  const [data, setData] = useState<any>([])
  const { users } = data || []
  useEffect(() => {
    getDataFromApi()
  }, [])
  console.log("check data", data)
  const getDataFromApi = async () => {
    try {
      const data: any = await getUsers()
      console.log("data inside", data.status)
      if (data.status === "SUCCESS") {
        setData(data?.data)
      } else {
        console.log("error isnide", data)
      }
    } catch (error) {
      console.log("error while calling function")
    }
  }

  return (
    <View>
      {users?.map((item: any) => (
        <TouchableOpacity onPress={() => navigation.navigate("UserDetailScreen")}>
          <Text>{item?.firstName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
