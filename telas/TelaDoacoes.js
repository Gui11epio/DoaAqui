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
            <Text style={styles.details}>{item.valor} - {item.data}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth:1,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  causa: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#777',
  },
});
