import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Ícones para autor, ano e editora

const DigitalLibraryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Biblioteca Digital</Text>

      <View style={styles.bookCard}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303825363222134834/image_8.png?ex=672d297e&is=672bd7fe&hm=3764bae944f52e690aaf0299286f7d1ce7f12a6df7b973fb1842903943636899&' }} // Substitua pela URL da imagem do livro
          style={styles.bookImage}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>Aprendendo a Jogar Damas</Text>
          <Text style={styles.bookAuthor}>
            <FontAwesome name="user" size={12} /> João Victor Mesquita
          </Text>
          <Text style={styles.bookYear}>
            <FontAwesome name="calendar" size={12} /> 2018
          </Text>
          <Text style={styles.bookPublisher}>
            <FontAwesome name="book" size={12} /> Editora Saraiva
          </Text>
        </View>
        <TouchableOpacity style={styles.readButton}>
          <Text style={styles.readButtonText}>Ler</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bookCard}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303825363524128779/image_9.png?ex=672d297e&is=672bd7fe&hm=3543ed9801a6d9fe41e931b3ebfba1ce5b93f8e409c35b123f5e23276d63febd&' }} // Substitua pela URL da imagem do livro
          style={styles.bookImage}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>Damas Avançadas vol. 1</Text>
          <Text style={styles.bookAuthor}>
            <FontAwesome name="user" size={12} /> Igor Lima, José Alsemo
          </Text>
          <Text style={styles.bookYear}>
            <FontAwesome name="calendar" size={12} /> 2020
          </Text>
          <Text style={styles.bookPublisher}>
            <FontAwesome name="book" size={12} /> Editora FTD
          </Text>
        </View>
        <TouchableOpacity style={styles.readButton}>
          <Text style={styles.readButtonText}>Ler</Text>
        </TouchableOpacity>
      </View>

      {/* Adicione mais livros conforme necessário */}
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
  bookCard: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  bookImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  bookYear: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  bookPublisher: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  readButton: {
    backgroundColor: '#00008B',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  readButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default DigitalLibraryScreen;
