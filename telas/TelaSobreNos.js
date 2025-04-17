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
        <Text>Guilherme Camasmie - 554894</Text>
      </View>
      <View style={styles.devBox}>
        <Image source={require('../assets/dev2.jpeg')} style={styles.devImage} />
        <Text>Pedro Manzo Yokoo - 556115</Text>
      </View>
      <View style={styles.devBox}>
        <Image source={require('../assets/dev3.jpeg')} style={styles.devImage} />
        <Text>Fernando Fernandes Prado - 557982</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  devBox: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  devImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
