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

   const jsonString = JSON.stringify({
    email: username,
    password: password,
    })

console.log(jsonString)


    fetch('https://reqres.in/api/login',{
      method: 'POST', body:jsonString, headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
    }
    }).then(res=> {
        return res.json()
    }).then(jsonData=>{

          this.props.navigation.navigate('Dashboard')
    })
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
