import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { UserHomeScreen, UserDetailScreen } from "@/screens"
import { USER_DETAIL_SCREEN, USER_HOME_SCREEN } from "@/assets/constants"

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={USER_HOME_SCREEN}>
        <Stack.Screen name="Home" component={UserHomeScreen} />
        <Stack.Screen name={USER_DETAIL_SCREEN} component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
