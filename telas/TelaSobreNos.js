import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function TelaSobreNos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.text}>
        O DoaAí conecta doadores a instituições de caridade, facilitando a solidariedade
        através da tecnologia. Nosso objetivo é transformar vidas com um clique.
      </Text>

      <Text style={styles.subtitle}>Equipe de Desenvolvimento</Text>
      <View style={styles.devBox}>
        <Image source={require('../assets/dev1.jpeg')} style={styles.devImage} />
        <Text style={styles.devText}>Guilherme Camasmie - 554894</Text>
      </View>
      <View style={styles.devBox}>
        <Image source={require('../assets/dev2.jpeg')} style={styles.devImage} />
        <Text style={styles.devText}>Pedro Manzo Yokoo - 556115</Text>
      </View>
      <View style={styles.devBox}>
        <Image source={require('../assets/dev3.jpeg')} style={styles.devImage} />
        <Text style={styles.devText}>Fernando Fernandes Prado - 557982</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'justify',
  },
  devBox: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  devImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  devText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
