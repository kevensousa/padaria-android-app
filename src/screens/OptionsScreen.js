// src/screens/OptionsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';

const OptionsScreen = ({ route, navigation }) => {
  const { product } = route.params; 
  const { addToCart } = useCart();
  
  const [selectedSabor, setSelectedSabor] = useState(null); 
  
  const handleFinalAdd = () => {
    if (!selectedSabor) {
      alert('Por favor, escolha um sabor!');
      return;
    }

    // Cria um novo objeto para o carrinho, garantindo que o nome do item reflita a escolha
    const itemWithOption = {
      ...product,
      name: `${product.name} (${selectedSabor})`,
      // Cria um novo ID para que itens com sabores diferentes não se agrupem
      id: `${product.id}-${selectedSabor.toLowerCase().replace(/\s/g, '-')}`, 
    };

    addToCart(itemWithOption);
    alert(`${itemWithOption.name} adicionado ao carrinho!`);
    navigation.goBack(); // Volta para o catálogo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.sectionTitle}>Escolha o Sabor:</Text>
      
      <ScrollView>
        {/* Acessa a primeira (e única, no momento) lista de choices: 'Sabor' */}
        {product.options[0].choices.map((sabor) => ( 
          <TouchableOpacity
            key={sabor}
            style={[styles.option, selectedSabor === sabor && styles.selectedOption]}
            onPress={() => setSelectedSabor(sabor)}
          >
            <Text style={styles.optionText}>{sabor}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        
        {/* Botão sempre marrom, mas com a verificação de sabor no onPress */}
        <TouchableOpacity 
          style={styles.finishButtonEnabled} 
          onPress={handleFinalAdd}
        >
          <Text style={styles.finishButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  productName: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#663521' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, marginTop: 15 },
  option: { 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  selectedOption: {
    borderColor: '#663521', 
    borderWidth: 2,
    backgroundColor: '#FFFACD', // Amarelo claro para seleção
  },
  optionText: { fontSize: 16 },
  footer: { 
    paddingTop: 15, 
    borderTopWidth: 1, 
    borderColor: '#ccc', 
    marginTop: 'auto' 
  },
  price: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 10, 
    color: '#663521' 
  },
  finishButtonEnabled: { // ESTILO PADRÃO DO BOTÃO (SEMPRE ATIVO/MARROM)
    backgroundColor: '#663521', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default OptionsScreen;