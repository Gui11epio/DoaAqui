import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native';

export default function TelaCampanhas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campanhas Emergenciais</Text>

      <Image
        source={require('../assets/emergencia1.jpeg')}
        style={styles.image}
      />
      <Text style={styles.caption}>Ajuda para vítimas das enchentes no RS</Text>
      <Button
        title="Visitar site parceiro"
        onPress={() => Linking.openURL('https://sosenchentes.rs.gov.br/inicial')}
      />

      <Image
        source={require('../assets/emergencia2.jpeg')}
        style={styles.image}
      />
      <Text style={styles.caption}>Campanha contra a fome em comunidades</Text>
      <Button
        title="Visitar site parceiro"
        onPress={() => Linking.openURL('https://pactocontrafome.org/')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  caption: {
    fontSize: 16,
    marginBottom: 15,
  },
});
