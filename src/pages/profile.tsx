import { onAuthStateChanged } from '@react-native-firebase/auth';
import { User } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Ionicons'
import History from'react-native-vector-icons/Ionicons'
import LogIcon from 'react-native-vector-icons/MaterialIcons'
import DeleteIcon from 'react-native-vector-icons/AntDesign'
import Contact from 'react-native-vector-icons/Feather'
import HistoryIcon from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../services/types';
const Profile = () => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList,'Profile'>>();
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, []);
    
     const handleLogout = async () => {
        try {
          await auth().signOut();
          Alert.alert('Logged out successfully!');
          navigation.navigate('Login');
        } catch (error) {
          Alert.alert('Error', 'Unable to log out. Please try again.');
        }
      };
    
      const handleDeleteAccount = async () => {
        if (user) {
          try {
            await user.delete();
            Alert.alert('Account deleted successfully!');
            navigation.navigate('Register');
          } catch (error) {
            Alert.alert('Error', 'Unable to delete account. Please try again.');
          }
        }
      };

      if (!user) {
        return (
          <View style={styles.container}>
            <Text>Loading...</Text>
          </View>
        );
      }
    
  return (
    <View style={styles.container}>
      <View style={styles.profile_container}> 
    <Image
      source={require('../assests/profilepic.png')} // Placeholder if no photo
      style={styles.profileImage}
    />
    </View>

    <View style={styles.personal_details}>

    <Text style={styles.name}>{user.displayName || 'User Name'}</Text>
    <Text style={styles.email}>{user.email}</Text>
    </View>

<View style={styles.setting_container}>

<View>
<Text style={styles.setting_headers}>Account</Text>

<View style={styles.edit_profile}>
  <Icon name='person' size={20} color='black'/>
<Text style={styles.text}>Edit Profile</Text>
<Icon name='chevron-forward' size={20}/>
</View>

<View style={styles.edit_profile}>
  <HistoryIcon name='history' size={20} color='black'/>
<Text style={styles.text}>Order History</Text>
<Icon name='chevron-forward' size={20}/>
</View>

</View>

<View> 
  <Text style={styles.setting_headers}> Help & Support</Text>

<View style={styles.edit_profile}>
  <Contact name='headphones' size={20} color='black'/>
<Text style={styles.text}>Contact Us</Text>
<Icon name='chevron-forward' size={20}/>
</View>

<View style={styles.edit_profile}>
 <DeleteIcon name='delete' size={20} color='black'/>
<Text style={styles.text} onPress={handleDeleteAccount}>Delete Account</Text>
<Icon name='chevron-forward' size={20} onPress={handleDeleteAccount}/>
</View>
<View style={styles.edit_profile}>
<LogIcon name='logout' size={20} color='black'/>
<Text style={styles.text} onPress={()=>handleLogout}>Logout</Text>
<Icon name='chevron-forward' size={20} onPress={handleLogout}/>
</View>

</View>


</View>

  </View>
  )
}
  

const styles=StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },
  profile_container:{
alignItems: 'center',
    justifyContent: 'center',
 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
   
    
  },
  personal_details:{

alignItems: 'center',
    justifyContent: 'center',

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
 // marginLeft:130,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },

  setting_container:{
backgroundColor:'white',
display:'flex',
flexDirection:'column',
padding:10,

  },
setting_headers:{
color:'black',
fontWeight:'bold',
fontSize:20,
padding:10,
},
edit_profile:{
display:'flex',
flexDirection: 'row',  
alignItems: 'center', 
justifyContent: 'space-between', 
paddingVertical: 10,
marginBottom:20,

},

text: {
  flex: 1, 
  marginLeft: 10, 
  color:'black',
},


  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },

})

export default Profile