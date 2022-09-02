import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { RoomFeed } from "../RoomFeed/RoomFeed"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

const Room = ({ navigation, route }) => {
	console.log(route)
	return (
		<React.Fragment>
		<Tab.Navigator>
				{/* <Tab.Screen name="RoomFeedDrawer" component={RoomFeed} /> */}
				<Tab.Screen name="RoomDrawer" component={Room} />
				{/* <Stack.Navigator>
					<Stack.Screen 
						name="RoomFeedDrawer"
						component={RoomFeed}
						options={{ title: "Room Feed"}}
					/>
					<Stack.Screen 
						name="RoomDrawer"
						component={Room}
						options={{ title: "Room ${roomName}" }}
					/>
				</Stack.Navigator> */}
			</Tab.Navigator>

		<View style={styles.container}>
			<Text>IzzzaaRoommmmmm</Text>
			{/* <Text>{route?.params.name}</Text> */}
			<StatusBar style="auto" />
		</View>
		</React.Fragment>
	)
}

export default Room