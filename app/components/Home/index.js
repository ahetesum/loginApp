import React, { Component } from 'react';
import { View, Text,TextInput, Button } from 'react-native';
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  checkLogin()
  {
    const {username,password} = this.state
    console.warn(username,password)
    if(username == 'Admin' && password == 'admin')
    {
        console.warn('Login Sucessfull')
    }
    else
    {
      console.warn('Failed to Login')

    }
  }

  render() {

    const {parent,heading, input,button}= styles

    return (
      <View style={parent}>
        <Text style= {heading}>Login into the Application</Text>
        <TextInput style={input} placeholder='Email' onChangeText = { text=> this.setState({username: text})}/>
        <TextInput style={input} placeholder='password' secureTextEntry= {true} onChangeText = { text=> this.setState({password: text})}/>
        <Button style= {button} title='Login' onPress={()=>this.checkLogin()}></Button>
      </View>
    );
  }
}
