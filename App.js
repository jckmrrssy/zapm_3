import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feed } from './src/views'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Feed"
          component={Feed}
          options={{ title: 'Home Feed'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App