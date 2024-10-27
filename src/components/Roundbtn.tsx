import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface RoundbtnProps{
    label:string;
    onPress?: ()=>void;
}
const Roundbtn: React.FC<RoundbtnProps> = ({ label, onPress }) => {
    return (
      <TouchableOpacity style={styles.loginButtonWrapper} onPress={onPress}>
        <Text style={styles.loginText}>{label}</Text>
      </TouchableOpacity>
    );
  };


const styles=StyleSheet.create({
    loginButtonWrapper: {
        backgroundColor: '#923ce9',
        borderRadius: 100,
        marginTop: 20,
      },
      loginText: {
  
        color: 'white',
        fontSize: 23,
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center",
        padding: 10,
      },
})

export default Roundbtn
