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
          link: item.fields.url || 'https://reliefweb.int',
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
            <Text style={styles.ongDescription}>{item.descricao}</Text>
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
  container: { 
    padding: 20,
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  ongCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderWidth:1
  },
  ongName: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  ongDescription: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 10 
  },
  link: { 
    color: '#1E90FF', 
    fontSize: 16, 
    textDecorationLine: 'underline' 
  },
});
