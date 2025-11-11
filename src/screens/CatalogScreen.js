// src/screens/CatalogScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard'; // <<-- IMPORTADO SEM CHAVES
import { products } from '../data/products'; 

const CatalogScreen = () => {
  const renderProduct = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  list: {
    padding: 10,
  },
});

export default CatalogScreen;