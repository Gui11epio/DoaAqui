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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'flex-start',
    borderWidth:1
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
