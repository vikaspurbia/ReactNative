import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../navigation/navigation';

const CreateProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
  });

  const navigation = useNavigation<AppNavigationProp>(); 

  const handleChange = (name: string, value: string) => {
    setProductData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
   
    if (!productData.name || !productData.description || !productData.price || !productData.stock) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    
    const newProductData = {
      ...productData,
      price: parseFloat(productData.price), 
            stock: parseInt(productData.stock, 10), 
    };

    try {
      const response = await axios.post('http://10.0.1.171:5000/api/create', newProductData);
      console.log('Product created successfully:', response.data);
      Alert.alert('Success', 'Product created successfully!');
      navigation.navigate('ProductList'); 
    } catch (error) {
      console.error('Error creating product:', error);
      Alert.alert('Error', 'There was an error creating the product. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create New Product</Text>
      <TextInput
        placeholder="Product Name"
        onChangeText={text => handleChange('name', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        onChangeText={text => handleChange('description', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        onChangeText={text => handleChange('price', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Stock Quantity"
        keyboardType="numeric"
        onChangeText={text => handleChange('stock', text)}
        style={styles.input}
      />
   
      <Button title="Create Product" onPress={handleSubmit} />
    </SafeAreaView>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 8,
  },
});

export default CreateProduct;
