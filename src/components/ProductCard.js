// src/components/ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext'; 
import { useNavigation } from '@react-navigation/native'; // Necessário para navegar para OptionsScreen

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 
  const navigation = useNavigation();

  const handleAction = () => {
    if (product.hasOptions) {
      // Se tiver opções, navega para a tela de Opções
      navigation.navigate('Options', { product });
    } else {
      // Se não tiver, adiciona direto
      addToCart(product);
      alert(`${product.name} adicionado ao carrinho!`);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={typeof product.image === 'object' ? product.image : { uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleAction}>
          <Text style={styles.buttonText}>
            {product.hasOptions ? 'Ver Opções' : 'Adicionar'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 4,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    color: '#663521', 
    fontWeight: '700',
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#663521', 
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ProductCard;