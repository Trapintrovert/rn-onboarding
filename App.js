import React, {useState, useEffect } from 'react';
import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './screens/OnboardingScreen'
import LoginScreen from './screens/LoginScreen'

const AppStack = createStackNavigator()

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value === null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })
  }, [])

  if( isFirstLaunch === null){
    return null
  }else if( isFirstLaunch === true){
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
          <AppStack.Screen name='Login' component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }else{
    return <LoginScreen/>
  }
  
}

export default App