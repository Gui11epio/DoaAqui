import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const categorias = [
  'Alimentos',
  'Roupas',
  'Higiene',
  'Educação',
  'Animais',
  'Outros',
];

export default function TelaExplorar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias de Doação</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
  },
});
