import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size) => {
    setCartItems((prevItems) => {
      const cartId = `${product.id}-${size}`;
      const itemExists = prevItems.find((item) => item.cartId === cartId);

      if (itemExists) {
        return prevItems.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, size, quantity: 1, cartId }];
    });
  };

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
