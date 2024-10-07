import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
 
    About: undefined;
    Cart: undefined;
    Contact: undefined;
    CreateProduct: undefined;
    ProductList: undefined; 
    Login:undefined;
    Register:undefined;
  };
  
export type AppNavigationProp = NavigationProp<RootStackParamList>;
