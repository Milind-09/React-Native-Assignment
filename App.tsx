import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import AppState from './src/context/AppState';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);
  return (
    <AppState>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppState>
  );
}
