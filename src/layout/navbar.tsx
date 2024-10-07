import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../navigation/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

const ProductNavbar: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  
  const navigateTo = (screen: keyof RootStackParamList) => {
    setModalVisible(false); 
    navigation.navigate(screen); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Product Store</Text>
        {/* Mobile Menu Button */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Modal for Mobile View */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => navigateTo('ProductList')}>
              <Text style={styles.menuItem}>Product List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('CreateProduct')}>
              <Text style={styles.menuItem}>Create Product</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Cart')}>
              <Text style={styles.menuItem}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('About')}>
              <Text style={styles.menuItem}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Contact')}>
              <Text style={styles.menuItem}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo('Login')}>
              <Text style={styles.menuItem}>Login</Text>
            </TouchableOpacity>   
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeMenu}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976D2',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    backgroundColor: '#2196F3',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#2196F3',
  },
  closeMenu: {
    marginTop: 10,
    fontSize: 16,
    color: '#FF0000',
  },
});

export default ProductNavbar;
