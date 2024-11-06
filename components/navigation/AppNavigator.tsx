// AppNavigator.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import index from '../../app/(tabs)'; // Importação da tela de login
import explore from '../../app/(tabs)/explore'; // Importação da tela de cadastro
import main from '../../app/(tabs)/main'
import news from '../../app/(tabs)/news'
import RankingScreen from '../../app/(tabs)/RankingScreen';
import TorneiosScreen from '../../app/(tabs)/TournamentsScreen';
import AulasParticularesScreen from '../../app/(tabs)/PrivateLessonsScreen';
import BibliotecaDigitalScreen from '../../app/(tabs)/DigitalLibraryScreen';
import SobreScreen from '../../app/(tabs)/AboutScreen';
import PagamentosScreen from '../../app/(tabs)/PaymentsScreen';
import MinhaContaScreen from '../../app/(tabs)/MyAccountScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
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
          name="Ranking"
          component={RankingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Torneios"
          component={TorneiosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AulasParticulares"
          component={AulasParticularesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BibliotecaDigital"
          component={BibliotecaDigitalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={SobreScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pagamentos"
          component={PagamentosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MinhaConta"
          component={MinhaContaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
