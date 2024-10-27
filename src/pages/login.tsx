
import { Alert, Image,StyleSheet, Text, TextInput, ToastAndroid,TouchableOpacity, View, } from "react-native";
  import React, { useEffect, useState } from "react";
import Roundbtn from "../components/Roundbtn";
  import Googlebtn from "../components/Googlebtn";
  import Ionicons from "react-native-vector-icons/Ionicons";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import { useNavigation } from "@react-navigation/native";
  import { loginUser, signInWithGoogle } from "../services/auth";
import Backarrow from "../components/Backarrow";
import auth from '@react-native-firebase/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from "../services/types";

  const LoginScreen = () => {
   
    const [secureEntery, setSecureEntery] = useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
 

  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList,'Login'>>();

const handleLogin = async (email: string, password: string) => {
  try {
    
    await loginUser({ email, password });

    
    
    const currentUser = auth().currentUser;
    if (!currentUser) {
      throw new Error('No user found.');
    }

    const token = await currentUser.getIdToken();
console.log('token is');
console.log(token);
   
    const response = await fetch('http://10.0.2.2:4550/protected', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`  
      },
    });
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log(responseData);
      Alert.alert('Logged in successfully');
      ToastAndroid.show('Logged in Successfully after authentication ', ToastAndroid.SHORT);
   setEmail(' ');
   setPassword(' ');

  } catch (err:any) {
    // Handle any errors
    Alert.alert('Login Failed', err.message);
  }
};

    return (
      <View style={styles.container}>
          <Backarrow destination="Register"/>
           
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Hey,</Text>
          <Text style={styles.headingText}>Welcome</Text>
          <Text style={styles.headingText}>Back</Text>
        </View>
        {/* form  */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={30} color='black' />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor='black'
              keyboardType="email-address" value={email} onChangeText={(e) =>setEmail(e)}/>
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={30} color='black' />

            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor='black' value={password} onChangeText={(e) =>setPassword(e)}
              secureTextEntry={secureEntery} />
              
            <TouchableOpacity >
              <SimpleLineIcons name={"eye"} size={20} color='black' />
            </TouchableOpacity>


          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Roundbtn label="Login" onPress={()=>{handleLogin(email,password)   
        navigation.navigate('Home')  
        }
        }/>
          
          <Text style={styles.continueText}>or continue with</Text>
          
    <Googlebtn onPress={signInWithGoogle}/>

          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Register')} >
              <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
 
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
     // flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },

    textContainer: {
      marginVertical: 20,
    },
    headingText: {
      fontSize: 32,
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
     fontFamily: 'Poppins-Light',
    },
    forgotPasswordText: {
      textAlign: "right",
      color: '#45484A',
     fontFamily: 'Poppins-SemiBold',
      marginVertical: 10,
      
    },
  
    continueText: {
      textAlign: "center",
      marginVertical: 20,
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: '#45484A',
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
      fontSize:16,
      fontFamily: 'Poppins-Regular',
    },
    signupText: {
      color: '#45484A',
      fontSize:17,
     fontFamily: 'Poppins-Bold',
    },
  });
 