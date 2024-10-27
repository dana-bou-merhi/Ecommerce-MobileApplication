import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

interface googlebtn{
onPress?: ()=>void;

}


const Googlebtn:React.FC<googlebtn> = ({onPress}) => {
  return (
<TouchableOpacity style={styles.googleButtonContainer} onPress={onPress}>
            <Image
              source={require('../assests/googleicon.png')}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    googleButtonContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor:'black',
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
       // gap: 3,
        backgroundColor:'#f5f5f5',
      },
      googleImage: {
        height: 35,
        width: 55,
        backgroundColor:'#f5f5f5',
        marginTop:3,
        
      },
      googleText: {
        fontSize: 23,
        fontFamily: 'Poppins-SemiBold',
        color:'black',
      },
})

export default Googlebtn