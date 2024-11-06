import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const RankingScreen = () => {
  // Dados de exemplo para o ranking
  const rankingData = [
    { rank: 1, name: "Pedro Amorim", location: "São Luís", points: 612, color: '#FFD700', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303823113296805979/image_2.png?ex=672d2766&is=672bd5e6&hm=61f8b27b39c01971e7c1bd8342f5ff0a07dfd3bb21769a4171d07c021185de37&' }, // Ouro
    { rank: 2, name: "Leonardo", location: "São Luís", points: 593, color: '#C0C0C0', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822515788976209/image_1.png?ex=672d26d7&is=672bd557&hm=44d3627db863242d8ce5264380215153d94604a5ae6aa59c5fd52351a1dd4856&' }, // Prata
    { rank: 3, name: "Luis Impieri", location: "Caxias", points: 590, color: '#CD7F32', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822516229374082/image_2.png?ex=672d26d7&is=672bd557&hm=0317421a6587e8d48b0c735f2ec78625d365496b8ec4adf67024b935f36ceb85&' }, // Bronze
    { rank: 4, name: "Paulo Sergio", location: "Santa Inês", points: 570, color: '#E0E0E0', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822515474268180/image.png?ex=672d26d7&is=672bd557&hm=6bac81f3fe6551cc1c55c8e96b5d7f7d8fa4502576eb316ab1193af125f7466f&0' },
    { rank: 5, name: "Igor Roberto", location: "Zé Doca", points: 569, color: '#E0E0E0', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822516506329160/image_3.png?ex=672d26d7&is=672bd557&hm=3b0dde2712f98ca54c2155aa8123cdd7202a58addf64e23f588469671f378b74&' },
    { rank: 6, name: "Augusto César", location: "Bacabal", points: 549, color: '#E0E0E0', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822516778827828/image_4.png?ex=672d26d7&is=672bd557&hm=5151b732779601d42f1cf0d6e74873c15ef0b74eab3a40e433b42648914a30c4&' },
    { rank: 7, name: "Stephanie", location: "Paço do Lumiar", points: 499, color: '#E0E0E0', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822517059977246/image_5.png?ex=672d26d7&is=672bd557&hm=fd33e04dbb160c6cdfcd963cf13f7ae560275e2eb1d37f1dd94e4a583e1bbbce&' },
    { rank: 8, name: "Rafael", location: "Codó", points: 349, color: '#E0E0E0', image: 'https://cdn.discordapp.com/attachments/1051331857062568088/1303822517370224681/image_6.png?ex=672d26d7&is=672bd557&hm=d725cda2b7993f7f3b54edc9addc76ca26dfaa3a61b3d1e5a6c34930c0647870&' },
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
