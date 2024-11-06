import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Ícones para cada categoria

const TournamentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Torneios</Text>

      <TouchableOpacity style={styles.optionButton}>
        <MaterialCommunityIcons name="calendar-clock" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Anteriores</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <MaterialCommunityIcons name="tournament" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Em Andamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <MaterialCommunityIcons name="calendar-check" size={24} color="black" style={styles.icon} />
        <Text style={styles.optionText}>Inscrições Abertas</Text>
      </TouchableOpacity>
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
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default TournamentsScreen;
