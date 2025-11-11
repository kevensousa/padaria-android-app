// src/screens/CheckoutScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cartItems, cartTotal, removeFromCart } = useCart();
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [entrega, setEntrega] = useState('Retirada na Loja'); 
  const [pagamento, setPagamento] = useState('Pix'); 
  const [observacoes, setObservacoes] = useState('');
  
  const handleFinalizarPedido = () => {
    if (!nome.trim() || !telefone.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha seu nome e telefone para finalizar o pedido.');
      return;
    }

    let mensagemPedido = `*Pedido da Panificadora Pão Quente* (R$ ${cartTotal.toFixed(2)})\n\n`;
    mensagemPedido += `*Cliente:* ${nome}\n`;
    mensagemPedido += `*Telefone:* ${telefone}\n`;
    mensagemPedido += `*Forma de Entrega:* ${entrega}\n`;
    mensagemPedido += `*Forma de Pagamento:* ${pagamento}\n\n`;
    
    mensagemPedido += '*--- Itens do Pedido ---*\n';
    cartItems.forEach(item => {
      mensagemPedido += `${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})\n`;
    });
    
    if (observacoes.trim()) {
      mensagemPedido += `\n*Observações:* ${observacoes.trim()}\n`;
    }
    mensagemPedido += `\n*TOTAL: R$ ${cartTotal.toFixed(2)}*`;

    Alert.alert(
      'Pedido Enviado!',
      'Seu pedido foi enviado com sucesso. Em breve a padaria entrará em contato.',
      [
        {
          text: 'Ver Detalhes do Pedido',
          onPress: () => {
            console.log(mensagemPedido); 
          }
        },
        {
          text: 'Voltar ao Catálogo',
          onPress: () => {
            cartItems.forEach(item => removeFromCart(item.id)); 
            navigation.popToTop(); 
          }
        },
      ]
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Detalhes para Finalizar</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Seus Dados</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu Nome Completo"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu Telefone (WhatsApp)"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Forma de Entrega</Text>
        {['Retirada na Loja', 'Delivery (R$ 5,00)'].map(option => (
          <TouchableOpacity 
            key={option} 
            style={styles.option} 
            onPress={() => setEntrega(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
            <View style={[styles.radio, entrega === option && styles.radioSelected]} />
          </TouchableOpacity>
        ))}
        {entrega === 'Delivery (R$ 5,00)' && (
           <TextInput
            style={styles.input}
            placeholder="Endereço de Entrega (Rua, Número, Bairro)"
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Forma de Pagamento</Text>
        {['Pix', 'Dinheiro', 'Cartão'].map(option => (
          <TouchableOpacity 
            key={option} 
            style={styles.option} 
            onPress={() => setPagamento(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
            <View style={[styles.radio, pagamento === option && styles.radioSelected]} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Observações</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="Ex: Pão um pouco mais assado, sem cebola, etc."
          value={observacoes}
          onChangeText={setObservacoes}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTotal}>Total a Pagar: R$ {cartTotal.toFixed(2)}</Text>
        <TouchableOpacity 
          style={styles.finishButton} 
          onPress={handleFinalizarPedido}
        >
          <Text style={styles.finishButtonText}>CONFIRMAR E ENVIAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 15, color: '#663521' },
  section: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#663521' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  inputArea: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10, height: 100, textAlignVertical: 'top' },
  option: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 },
  optionText: { fontSize: 16 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#ccc' },
  radioSelected: { backgroundColor: '#FFD700', borderColor: '#663521' },
  summary: { padding: 10, backgroundColor: '#fff', borderRadius: 8, marginTop: 10 },
  summaryTotal: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#663521' },
  finishButton: { backgroundColor: '#663521', padding: 18, borderRadius: 8, alignItems: 'center' },
  finishButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default CheckoutScreen;