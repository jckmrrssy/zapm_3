import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RoomFeed, Room } from './src/views'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="RoomFeed"
          component={RoomFeed}
          options={{ title: 'Room Feed'}}
        />
        <Stack.Screen 
          name="Room"
          component={Room}
          options={{ title: 'Room ${roomName}' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App