// AppNavigator.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import index from '../../app/(tabs)/index'; // Importação da tela de login
import explore from '../../app/(tabs)/explore'; // Importação da tela de cadastro

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="Login" component={index} />
        <Stack.Screen name="SignUp" component={explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
