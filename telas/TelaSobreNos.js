import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function TelaSobreNos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌟 Sobre Nós</Text>

      <Text style={styles.text}>
        O <Text style={{ fontWeight: 'bold' }}>DoaAí</Text> conecta doadores a instituições de caridade, facilitando a
        solidariedade através da tecnologia. Nosso objetivo é transformar vidas com um clique, criando uma ponte segura e eficiente entre quem quer ajudar e quem precisa de ajuda.
      </Text>

      <Text style={styles.subtitle}>👨‍💻 Equipe de Desenvolvimento</Text>

      
      <View style={styles.devBox}>

        <Image source={require('../assets/dev1.jpeg')} style={styles.devImage} />
        <View style={styles.devInfo}>

          <Text style={styles.devText}>Guilherme Camasmie Laiber de Jesus</Text>
          <Text style={styles.rmText}>RM: 554894</Text>

          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/Gui11epio')}
              style={[styles.linkButton, styles.github]}
            >
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.linkedin.com/in/guilherme-camasmie-laiber-de-jesus-6111a82b6/')}
              style={[styles.linkButton, styles.linkedin]}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
      
        </View>

      </View>

    
      <View style={styles.devBox}>

        <Image source={require('../assets/dev2.jpeg')} style={styles.devImage} />
        <View style={styles.devInfo}>

          <Text style={styles.devText}>Pedro Manzo Yokoo</Text>
          <Text style={styles.rmText}>RM: 556115</Text>

          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/Pedro-sugoy')}
              style={[styles.linkButton, styles.github]}
            >
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.linkedin.com/in/pedro-yokoo-36291a319/')}
              style={[styles.linkButton, styles.linkedin]}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

      
      <View style={styles.devBox}>

        <Image source={require('../assets/dev3.jpeg')} style={styles.devImage} />
        <View style={styles.devInfo}>

          <Text style={styles.devText}>Fernando Fernandes Prado</Text>
          <Text style={styles.rmText}>RM: 557982</Text>

          <View style={styles.links}>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/fehunterbr')}
              style={[styles.linkButton, styles.github]}
            >
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.linkedin.com/in/fernando-prado-41b61524b/')}
              style={[styles.linkButton, styles.linkedin]}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>

          </View>

        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F3F7FA',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#1A374D',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#333',
  },
  subtitle: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#406882',
  },
  devBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  devImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  devInfo: {
    flex: 1,
  },
  devText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#102C57',
  },
  rmText: {
    fontSize: 14,
    color: '#555',
  },
  links: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 10,
  },
  linkButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  github: {
    backgroundColor: '#333',
  },
  linkedin: {
    backgroundColor: '#0077B5',
  },
  linkText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
