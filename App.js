import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextAnimator from './components/TextAnimation';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TextAnimator content= 'Helping You Stay Connected With Your Chosen Family.  BOOMIE' 
      textStyle={styles.textStyle}
      style={styles.containerStyle}
      duraiton={1000}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a02b2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight
  },
  container: {},
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    MarginBottom: 14
  }
});
