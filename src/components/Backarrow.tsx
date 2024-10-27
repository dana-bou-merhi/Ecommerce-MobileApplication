import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from '../services/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

type BackarrowProps = {
  destination: keyof RootStackParamList; // Ensures the prop is a valid screen name
};

const Backarrow: React.FC<BackarrowProps>  = ({destination}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.backButtonWrapper} onPress={()=>navigation.navigate(destination)} >
    <Ionicons
      name={"arrow-back-outline"}
      color='black'
      size={25}
    />
  </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor:'#D9D9D9',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      },


})

export default Backarrow