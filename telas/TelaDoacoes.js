import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const historico = [
  { id: '1', causa: 'Ajuda RS', valor: 'R$ 50,00', data: '10/04/2025' },
  { id: '2', causa: 'Cesta básica', valor: 'R$ 30,00', data: '02/04/2025' },
];

export default function TelaDoacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Doações</Text>
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.causa}>{item.causa}</Text>
            <Text>{item.valor} - {item.data}</Text>
          </View>
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
  item: {
    marginBottom: 15,
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
  },
  causa: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
