import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store'; 
import AppNavigator from './src/navigation/AppNavigation'; 

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
