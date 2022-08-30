import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Room = ({ navigation, route }) => {
  return (
        <View style={styles.container}>
            <Text>IzzzaaRoommmmmm</Text>
            <StatusBar style="auto" />
        </View>
  )
}

export default Room