import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking, ScrollView } from 'react-native';

export default function TelaCampanhas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💚 Campanhas Emergênciais</Text>

      <View style={styles.campaignCard}>
        <Image
          source={require('../assets/emergencia1.jpeg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Ajuda para vítimas das enchentes no RS</Text>
        <View style={styles.buttonGroup}>
          <Button
            title="Visitar site parceiro"
            onPress={() => Linking.openURL('https://sosenchentes.rs.gov.br/inicial')}
            color="#5DB075"
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Fazer uma Doação"
            onPress={() => navigation.navigate('Minhas Doações')}
            color="#2980B9"
          />
        </View>
      </View>

      <View style={styles.campaignCard}>
        <Image
          source={require('../assets/emergencia2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Campanha contra a fome em comunidades</Text>
        <View style={styles.buttonGroup}>
          <Button
            title="Visitar site parceiro"
            onPress={() => Linking.openURL('https://pactocontrafome.org/')}
            color="#5DB075"
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Fazer uma Doação"
            onPress={() => navigation.navigate('Minhas Doações')}
            color="#2980B9"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
  },
  campaignCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 25,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  caption: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    padding: 10,
    textAlign: 'center',
  },
  buttonGroup: {
    marginHorizontal: 20,
    marginTop: 8,
  },
});
