/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './app/components/Login'
import Dashboard from './app/components/Dashboard'

import { createStackNavigator , createAppContainer} from 'react-navigation';

  const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    }
  });
  
  export default createAppContainer(AppNavigator);
