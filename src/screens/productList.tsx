import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppNavigationProp } from '../navigation/navigation';

interface ProductData {
  id: string; 
  name: string; 
  description: string; 
  price: number;
  stock: number; 
}

const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<ProductData[]>([]);
  const navigation = useNavigation<AppNavigationProp>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://10.0.1.171:5000/api/'); 
        setProductList(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
        Alert.alert('Error', 'There was an error fetching the product list. Please try again.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product Management Dashboard</Text>
      <Button
        title="Create New Product"
        onPress={() => navigation.navigate('CreateProduct')}
        color="#6200ee"
      />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Product Name</DataTable.Title>
          <DataTable.Title>Category</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>Stock</DataTable.Title>
        </DataTable.Header>

        {productList.map((product) => (
  <DataTable.Row key={product.id}>
    <DataTable.Cell>
      <Text>{product.name}</Text>
    </DataTable.Cell>
    <DataTable.Cell>
      <Text>{product.description}</Text>
    </DataTable.Cell>
    <DataTable.Cell numeric>
      <Text>{product.price}</Text>
    </DataTable.Cell>
    <DataTable.Cell numeric>
      <Text>{product.stock}</Text>
    </DataTable.Cell>
  </DataTable.Row>
))}

      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
});

export default ProductList;
