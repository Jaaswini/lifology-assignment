import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen } from "@/screens"
import UserDetailScreen from "@/screens/UserDetailScreen"
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
