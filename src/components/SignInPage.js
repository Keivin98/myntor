import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class SignInPage extends React.Component{
  static propTypes = {
      skipPress: PropTypes.func,
  }
  state = {
      signUp: false,
      signIn: true,
      signUpText: 'black',
      signInText: 'white',
      signUpBg: 'white',
      signInBg: 'black',
      signText: 'SIGN IN'
    }
  render() {

      return (
        <View style = {styles.container}>
          <Image style= {styles.image} source={require('../../images/Pronto.png')}/>
          <View style = {{width: '140%'}}>
            <View style = {{flexDirection: 'row', alignSelf: 'center', marginLeft: -155,}}>

            <TouchableOpacity
                style = {[styles.optionSignIn, {backgroundColor: this.state.signUpBg}]}
                onPress = {() => this.setState({
                                                signUp: true,
                                                signIn: false,
                                                signUpText:'white',
                                                signInText:'black',
                                                signUpBg:'black',
                                                signInBg:'white',
                                                signText:'SIGN UP'})}
            >
              <Text style = {{color: this.state.signUpText, alignSelf: 'center'}}> SIGN UP </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {[styles.optionSignUp, {backgroundColor:this.state.signInBg}]}
                onPress = {() => this.setState({
                                                signUp: false,
                                                signIn: true,
                                                signInText:'white',
                                                signUpText:'black',
                                                signUpBg:'white',
                                                signInBg:'black'})}>
              <Text style = {{color: this.state.signInText, alignSelf: 'center'}}> SIGN IN </Text>
            </TouchableOpacity>

            </View>


            <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
              <TextInput
                placeholder = 'Email'
                autoCapitalize = "none"
                autoCorrect = {false}
                style= {[styles.inputBoxes, {fontStyle:'italic'}]}

              />
            </View>

            <View>
              <TextInput
                placeholder = 'Password'
                autoCorrect = {false}
                secureTextEntry={true}
                autoCapitalize = "none"
                style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

              />
            </View>
            {this.state.signUp && (
                        <View>
                          <View>
                            <TextInput
                              placeholder = 'Confirm Password'
                              autoCorrect = {false}
                              secureTextEntry={true}
                              autoCapitalize = "none"
                              style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

                            />
                          </View>
                          <View>
                            <TextInput
                              placeholder = 'Name'
                              autoCorrect = {false}
                              secureTextEntry={true}
                              autoCapitalize = "none"
                              style= {[styles.inputBoxes, {marginTop:0, fontStyle:'italic'}]}

                            />
                          </View>
                        </View>

      )}



            <TouchableOpacity style = {styles.signButton}>
            <Text style = {{color: 'white', alignSelf: 'center'}}> CONTINUE</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.skipButton} onPress = {() => this.props.navigation.navigate('HomePage')} >
              <Text style = {{marginLeft: -20, marginTop: 30, fontSize: 20}}> Skip </Text>
              <Icon style = {{marginLeft: -1, marginTop: 29}} name="angle-right" size={27} color='black'/>
            </TouchableOpacity>


          </View>
      </View>
  );

}
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },

  image:{
    alignSelf: 'center',
    width: '69%',
    height: '20%',
    resizeMode: 'contain',
    justifyContent: 'center',

  },

  inputBoxes: {
    alignSelf: 'center',
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    fontSize: 16,
    marginBottom: 15,
    marginTop: 50,
    marginLeft: -160,
    color:'black',
  },

  optionSignIn: {
    borderWidth: 2,
    marginRight: 20,
    backgroundColor: 'white',
    width: 140,
    height: 25,
    justifyContent: 'center',
  },

  optionSignUp: {
    borderWidth: 2,
    backgroundColor: 'black',
    width: 140,
    height: 25,
    justifyContent: 'center',
  },

  signButton: {

    backgroundColor: 'black',
    borderWidth: 2,
    width: 140,
    height: 25,
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 136,
  },

  skipButton: {
    marginLeft : 300,
    flexDirection: 'row'
  },

});

export default SignInPage;
