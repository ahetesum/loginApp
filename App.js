/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './app/components/Home'
import { createStackNavigator , createAppContainer} from 'react-navigation';

  const AppNavigator = createStackNavigator({
    Home: {
      screen: Home
    }
  });
  
  export default createAppContainer(AppNavigator);
