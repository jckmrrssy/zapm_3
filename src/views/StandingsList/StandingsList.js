import React from "react"
import PropTypes from "prop-types"
import { StatusBar } from "expo-status-bar"
import { Button, View, Text, StyleSheet } from "react-native"
import { TouchableListItem } from "../../components"


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})

const list = [
	{
		name: "Amy Farha",
		subtitle: "Vice President"
	},
	{
		name: "Chris Jackson",
		avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
		subtitle: "Vice Chairman"
	},
]

const StandingsList = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Standings View</Text>
			{
				list.map((item, index) => (
					<TouchableListItem key={item.name} iterationProp={index} nameProp={item}>
					</TouchableListItem>
				))
			}
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