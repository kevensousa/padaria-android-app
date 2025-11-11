// src/components/CartButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext'; 

const CartButton = () => {
  const navigation = useNavigation();
  const { cartItems } = useCart(); 

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')} 
      style={styles.container}
    >
      <Text style={styles.text}>🛒 Carrinho ({totalItems})</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    padding: 5,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  }
});

export default CartButton;