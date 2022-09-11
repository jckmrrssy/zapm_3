import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, Text, Button } from "react-native"
import React from "react"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

const Chat = ({ navigation }) => {
	return (
		<React.Fragment>
			<View style={styles.container}>
				<Text>Jem#3 Chat view Feed (Home page)</Text>
				<StatusBar style="auto" />
			</View>
			<Button
				title="Go to Room"
				onPress={() => {
					navigation.navigate("RoomDrawer", { foo: "JackTest"})
				}}
			/>
		</React.Fragment>
	)
}

export default Chat