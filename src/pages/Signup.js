import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator} from 'react-navigation';
import { withNavigation } from 'react-navigation';
import Logo from '../components/Logo';
import Form from '../components/Form';

 export default class Signup extends Component<{}> {
	 constructor(props) {
        super(props)
    };
	onPress() => {this.props.navigation.navigate('Login');};
	render(){
		//const {navigate} = this.props.navigation;
		return(
		<View style={styles.container}>
		<Logo/>
		<Form type='Signup'/>
		<View style={styles.signupTextCont}>
		<Text style={styles.signupText}>Already have an account? </Text>
		<View>
		//<TouchableOpacity onPress={() => {navigation.navigate('Login');}}>
		<TouchableOpacity onPress={() => {this.onPress()}}>
		<Text style={styles.signupButton}>Sign In</Text>
		</TouchableOpacity>
		</View>
		</View>
		</View>
		
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont:{
	  flexGrow:1,
	  alignItems:'flex-end',
	  justifyContent: 'center',
	  paddingVertical:16,
	  flexDirection: 'row',
  },
  signupText: {
	  color: 'rgba(255,255,255,0.6)',
	  fontSize:16,
  },
  signupButton: {
	  color:'#fff',
	  fontSize:16,
	  fontWeight:'500',
  }
});

