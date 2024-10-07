import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';

const Cart = () => {
  const [cartItems] = useState([
    { id: '1', name: 'Product 1', price: 29.99, quantity: 2 },
    { id: '2', name: 'Product 2', price: 49.99, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Proceed to checkout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.cartItem}>
            {item.name} - Price: ${item.price} x {item.quantity}
          </Text>
        )}
      />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button title="Proceed to Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    fontSize: 16,
    marginVertical: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default Cart;
