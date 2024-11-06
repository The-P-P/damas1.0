import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../components/navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';


type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'news'>;


type Props = {
  navigation: MenuScreenNavigationProp;
};

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('news')}>
        <MaterialIcons name="article" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Notícias</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Ranking')}>
        <MaterialCommunityIcons name="trophy-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Torneios')}>
        <MaterialCommunityIcons name="tournament" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Torneios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => {}}>
        <MaterialCommunityIcons name="gamepad-variant" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Amistosos (Em breve)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('AulasParticulares')}>
        <MaterialCommunityIcons name="school-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Aulas Particulares</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('BibliotecaDigital')}>
        <MaterialCommunityIcons name="book-open-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Biblioteca Digital</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Sobre')}>
        <MaterialIcons name="info-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Pagamentos')}>
        <FontAwesome name="money" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Pagamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('MinhaConta')}>
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
