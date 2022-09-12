import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StandingsList, StandingsDrilldown } from "../../components/index" 

const StandingsStack = createNativeStackNavigator()


//  TODO: Move each stack nav to a routing/nav folder instead? 
const Standings = () => {
	return (
		<StandingsStack.Navigator>
			<StandingsStack.Screen name="Standings" component={StandingsList} />
			<StandingsStack.Screen name="StandingsDrilldown" component={StandingsDrilldown} />
		</StandingsStack.Navigator>
	)
}

export default Standings