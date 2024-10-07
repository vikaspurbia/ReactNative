import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const Register: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>(''); 
  const [successMessage, setSuccessMessage] = useState<string>('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch({ type: 'auth/register', payload: { username, password, role } });
    setSuccessMessage('Registration successful!');
    setTimeout(() => {
      navigation.navigate('Login');
      setSuccessMessage(''); 
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login here
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

export default Register;
