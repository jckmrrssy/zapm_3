import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BetOfTheWeek, Chat, DraftResults, Standings, WeeklyMatchup } from "./src/views/index"

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Standings" component={Standings} />
				<Tab.Screen name="BetOfTheWeek" component={BetOfTheWeek} />
				<Tab.Screen name="WeeklyMatchup" component={WeeklyMatchup} />
				<Tab.Screen name="Chat" component={Chat} />
				<Tab.Screen name="DraftResults" component={DraftResults} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App