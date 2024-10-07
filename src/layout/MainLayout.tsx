import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductNavbar from '../layout/navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <ProductNavbar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainLayout;
