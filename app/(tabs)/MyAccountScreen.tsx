import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        {/* Foto do usuário */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pela URL da imagem do usuário
          style={styles.profileImage}
        />
        
        <TouchableOpacity>
          <Text style={styles.uploadText}>Carregar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.removeText}>Remover Foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Federado desde:</Text>
        <Text style={styles.value}>09/10/2024</Text>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>#2458</Text>
        
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Paulo Sérgio Costa de Figueiredo Filho</Text>
        
        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.value}>111.222.333-44</Text>
        
        <Text style={styles.label}>Nascimento:</Text>
        <Text style={styles.value}>25/11/1992</Text>
        
        <Text style={styles.label}>Endereço:</Text>
        <Text style={styles.value}>
          Rua das Flores, 10, Quadra X, Jardim Europa, 65000-000
        </Text>
        
        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.value}>São Luís</Text>
        
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.value}>(98) 98765-4321</Text>
        
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>paulo@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#001f54',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadText: {
    color: '#007BFF',
    fontSize: 14,
  },
  removeText: {
    color: '#FF6347',
    fontSize: 14,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    color: '#666666',
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
