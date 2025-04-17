import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Linking } from 'react-native';

export default function TelaOngs() {
  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.reliefweb.int/v1/sources?appname=doaaqui')
      .then(response => response.json())
      .then(data => {
        const listaOngs = data.data.map(item => ({
          id: item.id,
          nome: item.fields.name,
          descricao: item.fields.description || 'Sem descrição disponível',
          link: item.fields.url || 'https://reliefweb.int'
        }));
        setOngs(listaOngs);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar ONGs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONGs de Causas Sociais</Text>
      <FlatList
        data={ongs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.ongCard}>
            <Text style={styles.ongName}>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(item.link)}>
              Saiba mais
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  ongCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  ongName: { fontSize: 18, fontWeight: 'bold' },
  link: { color: 'blue', marginTop: 5 },
});
