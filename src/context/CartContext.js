// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';
import { products } from '../data/products'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Alterado para iniciar vazio [], removendo os itens de teste
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  
  const decreaseQuantity = (productId) => {
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem && existingItem.quantity > 1) {
      setCartItems(
        cartItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else if (existingItem && existingItem.quantity === 1) {
      removeFromCart(productId);
    }
  };

  // Função extra para você usar no CheckoutScreen após finalizar a compra
  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart, // Adicionado ao Provider
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);