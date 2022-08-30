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

const RoomFeed = ({ navigation }) => {
	return (
		<React.Fragment>
			<View style={styles.container}>
				<Text>Jem#3 Room Feed (Home page)</Text>
				<StatusBar style="auto" />
			</View>
			<Button
				title="Go to Room"
				onPress={() => {
					navigation.navigate("Room", { foo: "JackTest"})
				}}
			/>
		</React.Fragment>
	)
}

export default RoomFeed