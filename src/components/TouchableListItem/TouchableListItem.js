import { View, Text } from "react-native"
import React from "react"

const TouchableListItem = ({iterationProp, nameProp}) => {
	return (
		<View>
			<Text>{nameProp.name}</Text>
			<Text>{iterationProp.toString()}</Text>
		</View>
	)
}

export default TouchableListItem