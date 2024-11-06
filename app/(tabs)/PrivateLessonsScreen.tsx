import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const PrivateLessonsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Aulas Particulares</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303825857147572244/image_12.png?ex=672d29f4&is=672bd874&hm=816f4d1ab006b0ee94d0a855961b9bf41c3afcc8ccb3b222e4327dd5af56a2bf&' }} // Substitua pela URL da foto do professor
          style={styles.profileImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Professor Rodrigo Monteiro</Text>
          <TouchableOpacity>
            <Text style={styles.phone}>
              <FontAwesome name="whatsapp" size={16} color="green" /> (98) 98888-8888
            </Text>
          </TouchableOpacity>
          <Text style={styles.availability}>
            <MaterialCommunityIcons name="calendar-range" size={12} /> SEG-QUA-SEX
          </Text>
          <Text style={styles.schedule}>
            <MaterialCommunityIcons name="clock-outline" size={12} /> 08h00–12h00 / 14h00–18h00
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303825857898352640/image_11.png?ex=672d29f4&is=672bd874&hm=8f02d427452143081b4fc8625dc6384adfa3b09201d552bd1c5d792786804ec6&' }} // Substitua pela URL da foto do professor
          style={styles.profileImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Professor Felipe Gomes</Text>
          <TouchableOpacity>
            <Text style={styles.phone}>
              <FontAwesome name="whatsapp" size={16} color="green" /> (98) 98888-7777
            </Text>
          </TouchableOpacity>
          <Text style={styles.availability}>
            <MaterialCommunityIcons name="calendar-range" size={12} /> TER-QUI
          </Text>
          <Text style={styles.schedule}>
            <MaterialCommunityIcons name="clock-outline" size={12} /> 08h00–12h00 / 14h00–18h00
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303825857516929145/image_10.png?ex=672d29f4&is=672bd874&hm=7a5ff95b5b16ac9709f3f0a5269fdc041a31fb6c7e32e18a38fe41357c6961e1&' }} // Substitua pela URL da foto do professor
          style={styles.profileImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Professor Álvaro Perdigão</Text>
          <TouchableOpacity>
            <Text style={styles.phone}>
              <FontAwesome name="whatsapp" size={16} color="green" /> (98) 98888-6666
            </Text>
          </TouchableOpacity>
          <Text style={styles.availability}>
            <MaterialCommunityIcons name="calendar-range" size={12} /> SEG-SEX
          </Text>
          <Text style={styles.schedule}>
            <MaterialCommunityIcons name="clock-outline" size={12} /> 14h00–18h00
          </Text>
        </View>
      </View>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  phone: {
    fontSize: 16,
    color: '#00008B',
    marginTop: 5,
  },
  availability: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  schedule: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
});

export default PrivateLessonsScreen;
