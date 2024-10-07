import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const Contact = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>We’d love to hear from you!</Text>

      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Your Email" style={styles.input} />
      <TextInput placeholder="Subject" style={styles.input} />
      <TextInput placeholder="Message" style={styles.input} multiline numberOfLines={4} />

      <Button title="Submit" onPress={() => {/* submit logic */}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 8,
  },
});

export default Contact;
