import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';  
import Cart from '../screens/cart';
import Contact from '../screens/contact';
import CreateProduct from '../screens/createProduct';
import ProductList from '../screens/productList'; 
import MainLayout from '../layout/MainLayout'; 
import { RootStackParamList } from './navigation'; 
import Login from '../screens/login';
import Register from '../screens/register';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="About" component={AboutWrapper} />
        <Stack.Screen name="Cart" component={CartWrapper} />
        <Stack.Screen name="Contact" component={ContactWrapper} />
        <Stack.Screen name="CreateProduct" component={CreateProductWrapper} />
        <Stack.Screen name="ProductList" component={ProductListWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Wrapper components to pass props correctly
const AboutWrapper: React.FC<any> = (props) => (
  <MainLayout>
    <About {...props} />
  </MainLayout>
);

const CartWrapper: React.FC<any> = (props) => (
  <MainLayout>
    <Cart {...props} />
  </MainLayout>
);

const ContactWrapper: React.FC<any> = (props) => (
  <MainLayout>
    <Contact {...props} />
  </MainLayout>
);

const CreateProductWrapper: React.FC<any> = (props) => (
  <MainLayout>
    <CreateProduct />
  </MainLayout>
);

const ProductListWrapper: React.FC<any> = (props) => (
  <MainLayout>
    <ProductList />
  </MainLayout>
);

export default AppNavigator;  
