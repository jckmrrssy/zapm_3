import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Feed = () => {
  return (
    <View style={styles.container}>
        <Text>Jem#3</Text>
        <StatusBar style="auto" />
  </View>
  )
}

export default Feed