import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Ícones para telefone e localização

const AboutScreen = () => {
  // Funções para abrir os links externos
  const openGoogleMaps = () => {
    Linking.openURL('https://maps.google.com/?q=Rua+da+Alegria,+155,+Centro,+Sao+Luis,+MA');
  };

  const openWaze = () => {
    Linking.openURL('https://waze.com/ul?q=Rua+da+Alegria,+155,+Centro,+Sao+Luis,+MA');
  };

  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/559832221111'); // Substitua pelo número correto
  };

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/fmjd'); // Substitua pela URL do Instagram correto
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sobre FMJD</Text>

      <View style={styles.infoBox}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Substitua pela URL da imagem da logo
          style={styles.logo}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.title}>Federação Maranhense de Jogos de Damas</Text>
          <Text style={styles.subText}>Pres. Marcelo Silva</Text>
          <Text style={styles.subText}>02/07/1977</Text>
          <Text style={styles.subText}>(98) 3222-1111</Text>
          <Text style={styles.subText}>Rua da Alegria, 155 – Centro, São Luís – MA, 65.020-010</Text>
        </View>
      </View>

      <View style={styles.mapButtonsContainer}>
        <TouchableOpacity style={styles.mapButton} onPress={openGoogleMaps}>
          <Text style={styles.mapButtonText}>Google Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mapButton} onPress={openWaze}>
          <Text style={styles.mapButtonText}>Waze</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity onPress={openWhatsApp} style={styles.socialButton}>
          <FontAwesome name="whatsapp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openInstagram} style={styles.socialButton}>
          <FontAwesome name="instagram" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  infoTextContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  mapButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  mapButton: {
    backgroundColor: '#00008B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#4CAF50', // Cor verde para WhatsApp e padrão para Instagram
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
