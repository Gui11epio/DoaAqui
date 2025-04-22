import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categorias = [
  { nome: 'Alimentos', icone: 'fast-food-outline' },
  { nome: 'Roupas', icone: 'shirt-outline' },
  { nome: 'Higiene', icone: 'medkit-outline' },
  { nome: 'Educação', icone: 'book-outline' },
  { nome: 'Animais', icone: 'paw-outline' },
  { nome: 'Outros', icone: 'ellipsis-horizontal-outline' },
];

export default function TelaExplorar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Categorias de Doação</Text>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Ionicons name={item.icone} size={24} color="#2980B9" style={styles.icon} />
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  icon: {
    marginRight: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
  },
});
