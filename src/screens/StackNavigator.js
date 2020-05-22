// import * as React from 'react';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import test from './test';
import TextToSpeech1 from './TextToSpeech1';
 
const AuthStack = createStackNavigator();
import 'react-native-gesture-handler';
 

function StackNavigator() {
  
  return (
    
    <NavigationContainer >
      
      <AuthStack.Navigator 
      initialRouteName="test"
      >
       
        <AuthStack.Screen
          name="test"
          component={test}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="TextToSpeech1"
          component={TextToSpeech1}
          options={{headerShown: false}}
        />
          
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
