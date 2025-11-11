// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import WelcomeScreen from '../screens/WelcomeScreen'; // SEM CHAVES
import CatalogScreen from '../screens/CatalogScreen'; // SEM CHAVES
import CartScreen from '../screens/CartScreen'; // SEM CHAVES
import CheckoutScreen from '../screens/CheckoutScreen'; // SEM CHAVES
import OptionsScreen from '../screens/OptionsScreen'; // <<-- SEM CHAVES
import CartButton from '../components/CartButton'; // SEM CHAVES

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome" 
        screenOptions={{
          headerStyle: { backgroundColor: '#FFD700' }, 
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={({ navigation }) => ({
            title: 'Cardápio e Pedidos',
            headerRight: () => (
              <CartButton /> 
            ),
          })}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ 
            title: 'Seu Carrinho',
            headerRight: () => null, 
          }}
        />

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ 
            title: 'Revisar e Finalizar',
          }}
        />
        
        {/* NOVA ROTA DE OPÇÕES */}
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{ 
            title: 'Escolha suas Opções',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;