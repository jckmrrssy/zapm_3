import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StandingsList, StandingsDrilldown } from "../views/index" 

const StandingsStack = createNativeStackNavigator()


const StandingsStackScreen = () => {
	return (
		<StandingsStack.Navigator>
			<StandingsStack.Screen name="StandingsList" component={StandingsList} />
			<StandingsStack.Screen name="StandingsDrilldown" component={StandingsDrilldown} />
		</StandingsStack.Navigator>
	)
}

export default StandingsStackScreen