// MenuScreen.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../components/navigation/types'; // caminho correto para o type.ts
import { useNavigation } from '@react-navigation/native';

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'main'>;

const MenuScreen: React.FC = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('news')}>
        <MaterialIcons name="article" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Notícias</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('RankingScreen')}>
        <MaterialCommunityIcons name="trophy-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('TournamentsScreen')}>
        <MaterialCommunityIcons name="tournament" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Torneios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('PrivateLessonsScreen')}>
        <MaterialCommunityIcons name="school-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Aulas Particulares</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('DigitalLibraryScreen')}>
        <MaterialCommunityIcons name="book-open-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Biblioteca Digital</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('AboutScreen')}>
        <MaterialIcons name="info-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('PaymentsScreen')}>
        <FontAwesome name="money" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Pagamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('MyAccountScreen')}>
        <MaterialCommunityIcons name="account-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Minha Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#001f54',
    padding: 20,
    alignItems: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default MenuScreen;
