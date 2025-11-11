// src/screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native'; // Importe o Image

// Simulação da importação da logo real.
// Se sua logo estiver em 'assets/logo.png', use:
const LogoImage = require('../../assets/logo.png');

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* NOVO: Componente da Imagem da Logo */}
      <Image 
        source={LogoImage} 
        style={styles.logoImage} 
        // Em um aplicativo real, você usaria 'resizeMode="contain"' para garantir que a imagem se ajuste.
      />
      
      <Text style={styles.logoText}>Panificadora e Café Pão Quente</Text>
      
      <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>
      <Text style={styles.subtitle}>Os melhores pães e doces da cidade.</Text>

      <Button 
        title="Acessar Cardápio" 
        color="#663521" 
        onPress={() => navigation.navigate('Catalog')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  
  // NOVO: Estilos para a imagem da logo
  logoImage: {
    width: 250, // Defina o tamanho que você deseja
    height: 250,
    resizeMode: 'contain', 
    marginBottom: 10, // Espaço entre a logo e o nome
  },
  
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#663521',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
});

export default WelcomeScreen;