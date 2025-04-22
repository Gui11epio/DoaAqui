import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Linking, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TelaOngs() {
  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');

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

  const ongsFiltradas = ongs.filter(ong =>
    ong.nome.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONGs de Causas Sociais</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar ONG por nome..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={ongsFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.ongCard}>
            <View style={styles.header}>
              <Icon name="handshake-o" size={20} color="#1A374D" style={{ marginRight: 8 }} />
              <Text style={styles.ongName}>{item.nome}</Text>
            </View>
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
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A374D',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  ongCard: {
    marginBottom: 20,
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ongName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102C57',
    flex: 1,
  },
  ongDescription: {
    fontSize: 15,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 12,
    lineHeight: 22,
  },
  link: {
    color: '#3A7CA5',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
