import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [giftItem, setGiftItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const THRESHOLD = 999;

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const isEligibleForGift = cartTotal >= THRESHOLD;

 
  useEffect(() => {
    if (!isEligibleForGift && giftItem) {
     
      setGiftItem(null);
    }
  }, [cartTotal, isEligibleForGift, giftItem]);

  const addToCart = (product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: newQuantity } : i));
  };

  const removeFromCart = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const selectGift = (gift) => {
    if (!isEligibleForGift) return;
    setGiftItem({ ...gift, price: 0, quantity: 1, isGiftData: true });
  };

  const removeGift = () => {
    setGiftItem(null);
  };

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const openDrawer = () => setIsDrawerOpen(true);

  return (
    <CartContext.Provider value={{
      items,
      giftItem,
      cartTotal,
      isEligibleForGift,
      THRESHOLD,
      isDrawerOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      selectGift,
      removeGift,
      toggleDrawer,
      closeDrawer,
      openDrawer
    }}>
      {children}
    </CartContext.Provider>
  );
};
