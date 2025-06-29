import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // A função agora aceita o produto e a numeração
  const addToCart = (product, size) => {
    setCartItems((prevItems) => {
      // Cria um ID único para o item no carrinho (produto + numeração)
      const cartId = `${product.id}-${size}`;
      const itemExists = prevItems.find((item) => item.cartId === cartId);

      // Se o item (com a mesma numeração) já existe, aumenta a quantidade
      if (itemExists) {
        return prevItems.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Se não existe, adiciona o novo item com sua numeração e cartId
      return [...prevItems, { ...product, size, quantity: 1, cartId }];
    });
  };

  // A remoção agora usa o cartId único
  const removeFromCart = (cartId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartId !== cartId)
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};