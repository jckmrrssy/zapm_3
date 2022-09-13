import React from "react"
import PropTypes from "prop-types"
import { StatusBar } from "expo-status-bar"
import { Button, View, Text, StyleSheet } from "react-native"


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

const StandingsList = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Standings View</Text>
			{/* <Text>{route?.params.name}</Text> */}
			<StatusBar style="auto" />
			<Button
				title="Go to drilldown"
				onPress={() => {
					navigation.navigate("StandingsDrilldown", { foo: "JackTest"})
				}}
			/>
		</View> 
	)
}

export default StandingsList