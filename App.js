import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BettingStackScreen, ChatStackScreen, DraftResultsStackScreen, StandingsStackScreen, WeeklyMatchupStackScreen } from "./src/navigation/index"

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>

				{/* TODO: not exactly this, but good sample for how to control tab view based on route 
				 screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						const icons = {
							Home: 'home',
							Profile: 'account',
						}

						return (
							<MaterialCommunityIcons
								name={icons[route.name]}
								color={color}
								size={size}
						)
					}
				})} */}

				<Tab.Screen name="StandingStackScreen" component={StandingsStackScreen} />
				<Tab.Screen name="BettingStackScreen" component={BettingStackScreen} />
				<Tab.Screen name="WeeklyMatchupStackScreen" component={WeeklyMatchupStackScreen} />
				<Tab.Screen name="ChatStackScreen" component={ChatStackScreen} />
				{/* TODO: make this a "MORE" tab  */}
				<Tab.Screen name="DraftResultsStackScreen" component={DraftResultsStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App