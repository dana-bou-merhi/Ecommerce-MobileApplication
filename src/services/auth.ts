import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert, ToastAndroid } from 'react-native';
import { GoogleSignin, isErrorWithCode, isSuccessResponse, statusCodes } from '@react-native-google-signin/google-signin';


interface LoginFormValues {
    email: string;
    password: string;
  }
  
  interface UserFormValues {
    email: string;
    password: string;
    name: string;
  }

  GoogleSignin.configure({
    webClientId: '6020520191-cpjh8le5ijerkn9pcqpburai3l16lu5i.apps.googleusercontent.com',
  });
  
  

  const registerUser = async ({ email, password,name }: UserFormValues) => {
    if(!name || !password ||!email){
Alert.alert('Enter Data')

    }
   
    else{
return auth().createUserWithEmailAndPassword(email.trim(),password)
.then(cred =>{
const {uid} =cred.user;
auth().currentUser?.updateProfile({
    displayName:name
})
ToastAndroid.show("Account created Successfully",ToastAndroid.SHORT)
return uid
})
.catch( err =>  {

if(err.code==='auth/invalid-email'){Alert.alert('Invalid email format')}
if(err.code==='auth/email-already-exists'){Alert.alert('Email already exists')}
if(err.code==='auth/invalid-password'){Alert.alert('Invalid Password it must be at leat 6 characters')}
})
    }
  };


  const loginUser = async ({ email, password }: LoginFormValues) =>{
if(!email || !password){
  Alert.alert('Email and password are required.');
  return;

}
    return auth().signInWithEmailAndPassword(email.trim(),password)
    .then(() =>{
        console.log(auth().currentUser?.uid)
        Alert.alert('Logged in ')
        ToastAndroid.show("Logged in Successfully",ToastAndroid.SHORT)
    })
    .catch(
        err => Alert.alert(err.code,err.message)
    )

  }

  const signout=async ()=>{
    return auth().signOut()
  }
  


const signInWithGoogle=async ()=>{
  
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    console.log('Attempting Google Sign-In...');
    const { idToken }:any = await GoogleSignin.signIn();
    console.log('Google ID Token:', idToken);
    if (!idToken) {
      throw new Error('Failed to obtain ID token');
    }

    
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in with the credential
    await auth().signInWithCredential(googleCredential);
    Alert.alert("Success", "Signed in with Google!");

  } catch (error: any) {
    console.error(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert("Error", "Sign-in cancelled");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert("Error", "Sign-in in progress");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert("Error", "Play Services not available");
    } else {
      Alert.alert("Error", error.message || "An unknown error occurred");
    }
  }

}




  export  {registerUser,loginUser,signout,signInWithGoogle}