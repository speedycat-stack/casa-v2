import { useState, useEffect } from 'react';

const calculateTotals = (items) => {
  return items.reduce((acc, item) => ({
    itemCount: acc.itemCount + item.quantity,
    totalAmount: acc.totalAmount + (item.price * item.quantity)
  }), { itemCount: 0, totalAmount: 0 });
};

export const useDonation = () => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const { itemCount, totalAmount } = calculateTotals(items);
    setItemCount(itemCount);
    setTotalAmount(totalAmount);
  }, [items]);

  const addItem = (item) => {
    setItems(current => {
      const existingItem = current.find(i => i.id === item.id);
      if (existingItem) {
        return current.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemId) => {
    setItems(current => current.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    setItems(current =>
      current.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  return {
    items,
    totalAmount,
    itemCount,
    addItem,
    removeItem,
    updateQuantity
  };
};