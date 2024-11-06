import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const RankingScreen = () => {
  // Dados de exemplo para o ranking
  const rankingData = [
    { rank: 1, name: "Pedro Amorim", location: "São Luís", points: 612, color: '#FFD700', image: 'https://via.placeholder.com/50' }, // Ouro
    { rank: 2, name: "Leonardo", location: "São Luís", points: 593, color: '#C0C0C0', image: 'https://via.placeholder.com/50' }, // Prata
    { rank: 3, name: "Luis Impieri", location: "Caxias", points: 590, color: '#CD7F32', image: 'https://via.placeholder.com/50' }, // Bronze
    { rank: 4, name: "Paulo Sergio", location: "Santa Inês", points: 570, color: '#E0E0E0', image: 'https://via.placeholder.com/50' },
    { rank: 5, name: "Igor Roberto", location: "Zé Doca", points: 569, color: '#E0E0E0', image: 'https://via.placeholder.com/50' },
    { rank: 6, name: "Augusto César", location: "Bacabal", points: 549, color: '#E0E0E0', image: 'https://via.placeholder.com/50' },
    { rank: 7, name: "Stephanie", location: "Paço do Lumiar", points: 499, color: '#E0E0E0', image: 'https://via.placeholder.com/50' },
    { rank: 8, name: "Rafael", location: "Codó", points: 349, color: '#E0E0E0', image: 'https://via.placeholder.com/50' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>RANKING</Text>

      {rankingData.map((player, index) => (
        <View key={index} style={[styles.playerCard, { backgroundColor: player.color }]}>
          <Text style={styles.rank}>{player.rank}</Text>
          <Image source={{ uri: player.image }} style={styles.playerImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.location}>{player.location}</Text>
          </View>
          <Text style={styles.points}>PTS {player.points}</Text>
        </View>
      ))}
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
  playerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 30,
    textAlign: 'center',
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  location: {
    fontSize: 14,
    color: '#666666',
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default RankingScreen;
