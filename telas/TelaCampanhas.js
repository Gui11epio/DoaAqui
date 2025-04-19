import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking, ScrollView } from 'react-native';

export default function TelaCampanhas() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Campanhas Emergenciais</Text>

      <View style={styles.campaignContainer}>
        <Image
          source={require('../assets/emergencia1.jpeg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Ajuda para vítimas das enchentes no RS</Text>
        <Button
          title="Visitar site parceiro"
          onPress={() => Linking.openURL('https://sosenchentes.rs.gov.br/inicial')}
          color="#5DB075"
        />
      </View>

      <View style={styles.campaignContainer}>
        <Image
          source={require('../assets/emergencia2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Campanha contra a fome em comunidades</Text>
        <Button
          title="Visitar site parceiro"
          onPress={() => Linking.openURL('https://pactocontrafome.org/')}
          color="#5DB075"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  campaignContainer: {
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  caption: {
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    color: '#555',
  },
});
