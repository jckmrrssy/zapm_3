import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RoomFeed, Room } from "./src/views"

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name="RoomFeedDrawer" component={RoomFeed} />
				<Drawer.Screen name="RoomDrawer" component={Room} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

export default App