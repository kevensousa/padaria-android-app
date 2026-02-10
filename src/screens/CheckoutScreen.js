import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cartItems, cartTotal, clearCart } = useCart();
  
  // Estados de Identificação
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  
  // Estados de Entrega e Pagamento
  const [entrega, setEntrega] = useState('Retirada na Loja'); 
  const [pagamento, setPagamento] = useState('Pix'); 
  const [observacoes, setObservacoes] = useState('');

  // Estados de Endereço (Novos)
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState(''); 
  const [cep, setCep] = useState('');

  const aplicarMascaraTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '').slice(0, 11);
    if (apenasNumeros.length <= 2) return apenasNumeros.length > 0 ? `(${apenasNumeros}` : apenasNumeros;
    if (apenasNumeros.length <= 7) return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
  };

  const handleFinalizarPedido = () => {
    const isDelivery = entrega.includes('Delivery');
    
    // Validação de Dados Básicos
    if (!nome.trim() || telefone.length < 14) {
      Alert.alert('Atenção', 'Por favor, preencha nome e telefone com DDD.');
      return;
    }

    // Validação de Endereço se for Delivery
    if (isDelivery && (!rua.trim() || !numero.trim())) {
      Alert.alert('Atenção', 'Para entrega, informe pelo menos a rua e o número.');
      return;
    }

    const valorFinal = isDelivery ? cartTotal + 5 : cartTotal;

    // Montagem da Mensagem (Recuperada e Ampliada)
    let mensagemPedido = `*PEDIDO: PANIFICADORA PÃO QUENTE*\n`;
    mensagemPedido += `------------------------------\n`;
    mensagemPedido += `*Cliente:* ${nome}\n`;
    mensagemPedido += `*Telefone:* ${telefone}\n`;
    mensagemPedido += `*Pagamento:* ${pagamento}\n`;
    mensagemPedido += `*Tipo:* ${entrega}\n`;
    
    if (isDelivery) {
      mensagemPedido += `*Endereço:* ${rua}, nº ${numero} - ${cidade} (CEP: ${cep})\n`;
    }

    mensagemPedido += `\n*--- ITENS ---*\n`;
    cartItems.forEach(item => {
      mensagemPedido += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    if (observacoes.trim()) {
      mensagemPedido += `\n*Observações:* ${observacoes.trim()}\n`;
    }
    
    mensagemPedido += `\n*TOTAL A PAGAR: R$ ${valorFinal.toFixed(2)}*`;

    // Retorno no LOG (Recuperado)
    console.log("=== NOVO PEDIDO RECEBIDO ===");
    console.log(mensagemPedido);

    Alert.alert(
      'Pedido Realizado!',
      'O Pedido foi enviado com sucesso. Obrigado por comprar conosco!',
      [{
        text: 'OK',
        onPress: () => {
          clearCart();
          navigation.popToTop(); 
        }
      }]
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Finalizar Pedido</Text>

      {/* Seção 1: Dados Pessoais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Seus Dados</Text>
        <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={setNome} />
        <TextInput 
          style={styles.input} 
          placeholder="Telefone (DDD + Número)" 
          value={telefone} 
          onChangeText={(t) => setTelefone(aplicarMascaraTelefone(t))}
          keyboardType="numeric"
        />
      </View>

      {/* Seção 2: Entrega e Endereço Dinâmico */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Entrega</Text>
        {['Retirada na Loja', 'Delivery (+ R$ 5,00)'].map(option => (
          <TouchableOpacity key={option} style={styles.option} onPress={() => setEntrega(option)}>
            <Text style={styles.optionText}>{option}</Text>
            <View style={[styles.radio, entrega === option && styles.radioSelected]} />
          </TouchableOpacity>
        ))}

        {entrega.includes('Delivery') && (
          <View style={styles.addressArea}>
            <TextInput style={styles.input} placeholder="Rua / Avenida" value={rua} onChangeText={setRua} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput style={[styles.input, { width: '30%' }]} placeholder="Nº" value={numero} onChangeText={setNumero} keyboardType="numeric" />
              <TextInput style={[styles.input, { width: '65%' }]} placeholder="CEP" value={cep} onChangeText={setCep} keyboardType="numeric" />
            </View>
            <TextInput style={styles.input} placeholder="Cidade" value={cidade} onChangeText={setCidade} />
          </View>
        )}
      </View>

      {/* Seção 3: Pagamento */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Pagamento</Text>
        {['Pix', 'Dinheiro', 'Cartão'].map(option => (
          <TouchableOpacity key={option} style={styles.option} onPress={() => setPagamento(option)}>
            <Text style={styles.optionText}>{option}</Text>
            <View style={[styles.radio, pagamento === option && styles.radioSelected]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Seção 4: Observações (Recuperado) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Observações</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="Ex: Pão bem quentinho, troco para R$ 50, etc."
          value={observacoes}
          onChangeText={setObservacoes}
          multiline
        />
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTotal}>
          Total: R$ {(entrega.includes('Delivery') ? cartTotal + 5 : cartTotal).toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.finishButton} onPress={handleFinalizarPedido}>
          <Text style={styles.finishButtonText}>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 15, color: '#663521' },
  section: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#663521' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  inputArea: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, height: 80, textAlignVertical: 'top' },
  addressArea: { marginTop: 10, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 10 },
  option: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  optionText: { fontSize: 16 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#ccc' },
  radioSelected: { backgroundColor: '#FFD700', borderColor: '#663521' },
  summary: { padding: 15, backgroundColor: '#fff', borderRadius: 8, marginBottom: 30 },
  summaryTotal: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  finishButton: { backgroundColor: '#663521', padding: 15, borderRadius: 8, alignItems: 'center' },
  finishButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default CheckoutScreen;