import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { TouchableOpacity, Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator} from 'react-navigation';
import Constants from 'expo-constants';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';


export default class App extends Component<{}> {
	
  constructor(props)
  {
	  super(props)
  }
  
  render(){
	  
	  return(
	  <View style={styles.container}>
	  <StatusBar
		backgroundColor="#1c313a"
		barStyle='light-content'
	  />
	  <Signup/>
	  </View>
	 
	  
	  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
