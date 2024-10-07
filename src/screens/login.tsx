import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust the path if necessary
import { login } from '../redux/auth/authSlice'; // Adjust the import according to your authSlice

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
   
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Access auth state
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      await dispatch(login({ username, password })); // Use the login action from your slice
    } catch (error) {
      Alert.alert('Login Failed', 'Failed to login. Please try again.'); // Use Alert for better UX
      console.error('Login error:', error);
    }
  };

  // Navigate to home when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('ProductList'); // Use navigation directly
    }
  }, [isAuthenticated, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username" 
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Create New Account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 16,
    backgroundColor: '#F0F4FF'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 24 
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 16, 
    paddingHorizontal: 8
  },
  link: { 
    marginTop: 16, 
    textAlign: 'center', 
    color: 'blue' 
  },
});

export default Login; 
