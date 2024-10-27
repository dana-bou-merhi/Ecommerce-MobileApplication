import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image ,StyleSheet, SafeAreaView, ToastAndroid} from 'react-native';
import Ioicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { registerUser, signInWithGoogle } from '../services/auth';
import { useNavigation } from '@react-navigation/native';
import Backarrow from '../components/Backarrow';
import Googlebtn from '../components/Googlebtn';
import Roundbtn from '../components/Roundbtn';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../services/types';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [secureEntery, setSecureEntery] = useState(true);
const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList,'Register'>>();

  return (
    <View style={styles.container}>
    <Backarrow destination='Welcome'/>
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Let's get</Text>
      <Text style={styles.headingText}>started</Text>
    </View>
    {/* form  */}
    <View style={styles.formContainer}>

    <View style={styles.inputContainer}>
      
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"  value={name} onChangeText={ (e) =>setName(e)} />
    </View>
      <View style={styles.inputContainer}>
        <Ioicons name={"mail-outline"} size={30} color='black' />
        <TextInput style={styles.textInput}  placeholder="Enter your email" value={email} onChangeText={(e) =>setEmail(e)}   placeholderTextColor='black' keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name={"lock"} size={30} color='black' />
        <TextInput style={styles.textInput} placeholder="Enter your password" value={password} 
          onChangeText={(e) =>setPassword(e)} secureTextEntry={secureEntery}/>

        <TouchableOpacity >
          <SimpleLineIcons name={"eye"} size={20} color='black' />
        </TouchableOpacity>
      </View>
      <Roundbtn label='Sign Up' onPress={() =>{registerUser({email,password,name})
    navigation.navigate('Login')
    }}/>
      <Text style={styles.continueText}>or continue with</Text>
     <Googlebtn onPress={() =>{signInWithGoogle().then(() => {
      ToastAndroid.show('Signed in',ToastAndroid.SHORT);
     
     }
        
       )}}/>

      <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Already have an account!</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')} >
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  backButtonWrapper: {
    height: 30,
    width: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,

  },
  forgotPasswordText: {
    textAlign: "right",
    color: '#45484A',
 
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: '#923ce9',
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 20,
 
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
  
    color: '#45484A',
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 5,
  },
  googleImage: {
    height: 35,
    width: 38,
  },
  googleText: {
    fontSize: 24,
    color:'black',
 
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: '#45484A',
  fontSize:17,
     fontFamily: 'Poppins-Bold'
  },
  signupText: {
    color: 'black',
    fontSize:17,
     fontFamily: 'Poppins-Bold'
  },

  });

export default Register;
