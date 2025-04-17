import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Linking, Button } from 'react-native';

export default function TelaHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Causas em Destaque</Text>
      <Image source={require('../assets/causa1.jpeg')} style={styles.image} />
      <Text style={styles.caption}>Campanha contra a fome</Text>
      <Button
        title="Visitar site parceiro"
        onPress={() => Linking.openURL('https://pactocontrafome.org/')}
      />
      <Image source={require('../assets/causa2.jpeg')} style={styles.image} />
      <Text style={styles.caption}>Ajuda para vítimas das chuvas</Text>
      // Exemplo de botão
      <Button
        title="Visitar site parceiro"
        onPress={() => Linking.openURL('https://www.greenpeace.org/brasil/blog/a-solidariedade-salva-ajude-as-comunidades-mais-afetadas-pelas-fortes-chuvas/')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
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
    marginBottom: 10,
  },
});
