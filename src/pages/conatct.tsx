import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { RootStackParamList } from '../services/types';

// Define the type for your navigation stack

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Contact'>>();

  const handleInputChange = (name: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <View style={styles.container}>
      <Header 
        onSearch={(query) => console.log(query)}
        navigation={navigation}
      />

      <ScrollView>
        <View style={styles.contactSection}>
          <View style={styles.contactInfo}>
            <View style={styles.headerWrapper}>
              <Icon name='phone' style={styles.icon} />
              <Text style={styles.headerText}>Call Us</Text>
            </View>
            <Text style={styles.infoText}>We are available 24/7, 7 days a week.</Text>
            <Text style={styles.infoText}>Phone: +8801611112222</Text>
          </View>

          <View style={styles.contactInfo}>
            <View style={styles.headerWrapper}>
              <Icon name='envelope'  style={styles.icon} />
              <Text style={styles.headerText}>Write Us</Text>
            </View>
            <Text style={styles.infoText}>Fill out our form and we will contact you within 24 hours.</Text>
            <Text style={styles.infoText}>Emails: customer@exclusive.com</Text>
            <Text style={styles.infoText}>           support@exclusive.com</Text>
          </View>
        </View>

        <View style={styles.contactForm}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={formData.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Message"
            value={formData.message}
            onChangeText={(value) => handleInputChange('message', value)}
            multiline
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  contactSection: {
    flexDirection: 'column', // Changed to column to display items vertically
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center',     // Center elements horizontally
    marginBottom: 20,
  },
  contactInfo: {
    width: '80%',            // Adjust width to center the contact sections
    paddingHorizontal: 20,   
    paddingVertical: 20,
    marginBottom: 20,        // Added margin between "Write Us" and "Call Us"
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center text and icon in each contact info section
  },
  headerText: {
    fontSize: 26,            // Increased font size
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,          // Space between icon and text
    paddingBottom:15,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555',
    textAlign: 'center',     // Center the text under each heading
  },
  icon: {
    color: '#4a4de9',
    fontSize: 45,            // Increased icon size
  },
  contactForm: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    width:300,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'center', // Center the input field within the contactForm

  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    width:200,
    backgroundColor: '#4a4de9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center', // Center the input field within the contactForm
     marginBottom:50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  mapWrapper: {
    height: 400,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Contact;