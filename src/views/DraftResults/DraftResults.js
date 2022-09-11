import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View, Text } from "react-native"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

const DraftResults = ({ navigation, route }) => {
	console.log(route)
	return (
		<View style={styles.container}>
			<Text>Draft Results View</Text>
			{/* <Text>{route?.params.name}</Text> */}
			<StatusBar style="auto" />
		</View>

	)
}

export default DraftResults