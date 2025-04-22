import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function TelaCampanhas({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💚 Campanhas Emergenciais</Text>

      <View style={styles.campaignCard}>
        <Image
          source={require('../assets/emergencia1.jpeg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Ajuda para vítimas das enchentes no RS</Text>

        <TouchableOpacity
          style={[styles.button, styles.LinkButton]}
          onPress={() => Linking.openURL('https://sosenchentes.rs.gov.br/inicial')}
        >
          <Text style={styles.buttonText}>Visitar site parceiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.DonationButton]}
          onPress={() => navigation.navigate('Doações')}
        >
          <Text style={styles.buttonText}>Fazer uma Doação</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.campaignCard}>
        <Image
          source={require('../assets/emergencia2.jpeg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Campanha contra a fome em comunidades</Text>

        <TouchableOpacity
          style={[styles.button, styles.LinkButton]}
          onPress={() => Linking.openURL('https://pactocontrafome.org/')}
        >
          <Text style={styles.buttonText}>Visitar site parceiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.DonationButton]}
          onPress={() => navigation.navigate('Doações')}
        >
          <Text style={styles.buttonText}>Fazer uma Doação</Text>
        </TouchableOpacity>
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
    paddingBottom: 20,
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
    padding: 12,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  DonationButton: {
    backgroundColor: '#5DB075',
  },
  LinkButton: {
    backgroundColor: '#2980B9',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
