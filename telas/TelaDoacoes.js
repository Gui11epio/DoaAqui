import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, ScrollView } from 'react-native';

export default function TelaDoacoes() {
  const [historico, setHistorico] = useState([
    { id: '1', causa: 'Ajuda RS', valor: 'R$ 50,00', data: '10/04/2025' },
    { id: '2', causa: 'Cesta básica', valor: 'R$ 30,00', data: '02/04/2025' },
  ]);

  const [causa, setCausa] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');

  const handleDoacao = () => {
    if (!causa || !valor || !data) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const novaDoacao = {
      id: String(historico.length + 1),
      causa,
      valor,
      data,
    };

    setHistorico([novaDoacao, ...historico]);
    setCausa('');
    setValor('');
    setData('');
    Alert.alert('Doação registrada com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>✨Doações</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Causa"
          style={styles.input}
          value={causa}
          onChangeText={setCausa}
        />
        <TextInput
          placeholder="Valor (ex: R$ 20,00)"
          style={styles.input}
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Data (ex: 22/04/2025)"
          style={styles.input}
          value={data}
          onChangeText={setData}
        />
        <View style={styles.buttonContainer}>
          <Button title="Doar" onPress={handleDoacao} color="#5DB075" />
        </View>
      </View>

      <Text style={styles.subTitle}>📋 Histórico de Doações</Text>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0F4F8',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 10,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  input: {
    backgroundColor: '#F9F9F9',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CED4DA',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  causa: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  details: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
});
