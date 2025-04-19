import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, Button } from 'react-native';

export default function TelaHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Causas em Destaque</Text>
      <View style={styles.view}>
      <Text style={styles.caption}>Campanha contra a fome</Text>
        <Image source={require('../assets/causa1.jpeg')} style={styles.image} />
        <Button
          title="Visitar site parceiro"
          onPress={() => Linking.openURL('https://pactocontrafome.org/')}
        />
      </View>

      <View style={styles.view}>
      <Text style={styles.caption}>Ajuda para vítimas das chuvas</Text>
        <Image source={require('../assets/causa2.jpeg')} style={styles.image} />
        <Button
          title="Visitar site parceiro"
          onPress={() => Linking.openURL('https://www.greenpeace.org/brasil/blog/a-solidariedade-salva-ajude-as-comunidades-mais-afetadas-pelas-fortes-chuvas/')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  view: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  caption: {
    fontSize: 23,
    marginBottom: 10,
    textAlign: 'center'
  },
});
