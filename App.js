import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RoomFeed, Room } from "./src/views"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="RoomFeed" component={RoomFeed} />
				<Tab.Screen name="Room" component={Room} />
				{/* <Stack.Navigator>
					<Stack.Screen 
						name="RoomFeed"
						component={RoomFeed}
						options={{ title: "Room Feed"}}
					/>
					<Stack.Screen 
						name="Room"
						component={Room}
						options={{ title: "Room ${roomName}" }}
					/>
				</Stack.Navigator> */}
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App