import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const NewsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Notícias</Text>

      {/* Barra de Pesquisa e Filtro */}
      <View style={styles.searchFilterContainer}>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={16} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="sort" size={18} color="#666" />
          <Text style={styles.filterText}>Relevância</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Notícias */}
      <View style={styles.newsCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Substitua pela URL da imagem da notícia
          style={styles.newsImage}
        />
        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>Morre Dotinha, maranhense campeão mundial de damas.</Text>
          <Text style={styles.newsDescription}>
            Figura emblemática do esporte faleceu na noite dessa terça-feira em São Luís.
          </Text>
          <Text style={styles.newsDate}>31/07/2024 07h49 - Atualizado há 2 meses</Text>
        </View>
        <TouchableOpacity style={styles.readButton}>
          <Text style={styles.readButtonText}>Ler Notícia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newsCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Substitua pela URL da imagem da notícia
          style={styles.newsImage}
        />
        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>Grupo de brasileiros disputa campeonato Panamericano de Damas na Costa Rica</Text>
          <Text style={styles.newsDescription}>
            O maranhense Allan Igor faz parte da delegação
          </Text>
          <Text style={styles.newsDate}>12/04/2024 07h02 - Atualizado há 6 meses</Text>
        </View>
        <TouchableOpacity style={styles.readButton}>
          <Text style={styles.readButtonText}>Ler Notícia</Text>
        </TouchableOpacity>
      </View>

      {/* Adicione mais notícias conforme necessário */}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  searchFilterContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '70%',
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  newsCard: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  newsInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  newsDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  newsDate: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginTop: 5,
  },
  readButton: {
    backgroundColor: '#00008B',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  readButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default NewsScreen;
