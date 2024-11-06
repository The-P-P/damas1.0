// AppNavigator.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import index from '../../app/(tabs)'; // Importação da tela de login
import explore from '../../app/(tabs)/explore'; // Importação da tela de cadastro
import main from '../../app/(tabs)/main'
import news from '../../app/(tabs)/news'
import RankingScreen from '../../app/(tabs)/RankingScreen';
import TournamentsScreen from '../../app/(tabs)/TournamentsScreen';
import PrivateLessonsScreen from '../../app/(tabs)/PrivateLessonsScreen';
import DigitalLibraryScreen from '../../app/(tabs)/DigitalLibraryScreen';
import AboutScreen from '../../app/(tabs)/AboutScreen';
import PaymentsScreen from '../../app/(tabs)/PaymentsScreen';
import MyAccountScreen from '../../app/(tabs)/MyAccountScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name="explore"
        component={explore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="index"
        component={index}
        options={{ headerShown: false }}
      />

        <Stack.Screen name="main" 
          component={main} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="news" 
        component={news} 
        options={{headerShown: false}}
        />

        <Stack.Screen
          name="RankingScreen"
          component={RankingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TournamentsScreen"
          component={TournamentsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivateLessonsScreen"
          component={PrivateLessonsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DigitalLibraryScreen"
          component={DigitalLibraryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentsScreen"
          component={PaymentsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyAccountScreen"
          component={MyAccountScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
