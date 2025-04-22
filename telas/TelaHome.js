import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaHome({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastrar')}
          style={{ marginRight: 15 }}
        >
          <Ionicons name="person-add-outline" size={26} color="#2980B9" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌍 Causas em Destaque</Text>

      <View style={styles.card}>
        <Text style={styles.causa}>🍽️ Campanha contra a fome</Text>
        <Image source={require('../assets/causa1.jpeg')} style={styles.image} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://pactocontrafome.org/')}
        >
          <Text style={styles.buttonText}>Visitar site parceiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.donationButton]}
          onPress={() => navigation.navigate('Minhas Doações')}
        >
          <Text style={styles.buttonText}>Fazer uma Doação</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.causa}>🌧️ Ajuda para vítimas das chuvas</Text>
        <Image source={require('../assets/causa2.jpeg')} style={styles.image} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://www.greenpeace.org/brasil/blog/a-solidariedade-salva-ajude-as-comunidades-mais-afetadas-pelas-fortes-chuvas/')}
        >
          <Text style={styles.buttonText}>Visitar site parceiro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.donationButton]}
          onPress={() => navigation.navigate('Minhas Doações')}
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
    paddingBottom: 60,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
  },
  causa: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2980B9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  donationButton: {
    backgroundColor: '#27AE60',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
