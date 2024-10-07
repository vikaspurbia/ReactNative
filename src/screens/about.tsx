import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation'; 


type AboutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'About'>;

const About: React.FC = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>(); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Our Product</Text>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Welcome to Our Innovative Product</Text>
        <Text style={styles.body}>
          Our product is designed to streamline processes, enhance productivity, and provide users with a seamless experience. We believe in the power of technology to simplify tasks and improve overall efficiency.
        </Text>
      </View>

      {/* Product Features Section */}
      <View style={styles.featuresContainer}>
        <View style={styles.card}>
          <Text style={styles.featureTitle}>Feature 1: User-Friendly Interface</Text>
          <Text style={styles.featureBody}>
            Our intuitive interface makes it easy for anyone to navigate and use the product efficiently, reducing the learning curve and boosting productivity.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.featureTitle}>Feature 2: Advanced Analytics</Text>
          <Text style={styles.featureBody}>
            Gain valuable insights through our powerful analytics tools that help you track performance and make informed decisions to drive growth.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.featureTitle}>Feature 3: Seamless Integration</Text>
          <Text style={styles.featureBody}>
            Our product integrates effortlessly with existing systems, ensuring a smooth transition and minimizing disruption to your workflow.
          </Text>
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.callToAction}>
        <Text style={styles.callToActionTitle}>Ready to revolutionize your workflow?</Text>
        <Text style={styles.callToActionBody}>
          Join countless users who have transformed their processes with our product. Experience the difference today!
        </Text>
        
        {/* Navigate to Contact page on button press */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Contact')} 
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3E5FF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  box: {
    maxWidth: 800,
    alignItems: 'center',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E88E5',
    marginBottom: 8,
  },
  featureBody: {
    fontSize: 14,
    color: '#666',
  },
  callToAction: {
    alignItems: 'center',
    marginTop: 24,
  },
  callToActionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  callToActionBody: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default About;
