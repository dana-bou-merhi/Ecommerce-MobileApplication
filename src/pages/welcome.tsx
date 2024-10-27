import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from '../services/types'

const Welcome = () => {

  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList,'Welcome'>>();
  return (
    <View style={styles.container}>
      <Image source={require('../assests/logo-removebg-preview.png')} style={styles.logo}/>
    <Image source={require('../assests/onlineshopping.jpg')} style={styles.bannerImage} />
    <Text style={styles.title}>Click Shop</Text>
    <Text style={styles.subTitle}>
    Welcome to Click Shop, your one-stop mobile destination for easy and enjoyable online shopping! 
    </Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.loginButtonWrapper,
          { backgroundColor: 'black' },
        ]} onPress={()=>navigation.navigate('Login')}
       
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>navigation.navigate('Register')}
        style={[styles.loginButtonWrapper]}>
        <Text style={styles.signupButtonText}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Welcome

const styles = StyleSheet.create({

      container: {
      
        backgroundColor: '#f5f5f5',
        alignItems: "center",
        
      },
      logo: {
        height: 80,
        width: 200,
       backgroundColor:'#f5f5f5',
      },
      bannerImage: {
      
        height: 400,
        width: 450,
      },
      title: {
        fontSize: 40,
        fontFamily: 'bold',
        paddingHorizontal: 20,
        textAlign: "center",
        color: 'black',
        marginTop: 40,
      },
      subTitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: "center",
        color: 'black',
       
        marginVertical: 20,
      },
      buttonContainer: {
        marginTop: 35,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: 'black',
        width: "80%",
        height: 60,
        borderRadius: 100,
      },
      loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
      },
      loginButtonText: {
        color: 'white',
        fontSize: 18,
      
      },
      signupButtonText: {
        fontSize: 18,
        color:'black'
       
      },

})

