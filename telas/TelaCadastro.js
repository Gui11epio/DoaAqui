import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('usuario');

  const handleRegister = () => {
    if (!nome || !email) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    console.log({ nome, email, tipo });
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.inner}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo (usuario ou voluntario)"
          value={tipo}
          onChangeText={setTipo}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  inner: {
    padding: 24,
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#000',
  },
  button: {
    backgroundColor: '#5DB075',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
