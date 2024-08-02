import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from "./../../../configs/FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter()

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {

    if (!fullName && !email && !password) {
      console.log('details are required')
      Alert.alert('Missing details', 'Enter your details', [
        {
          text: 'Cancel',
          //onPress: () => console.log('Cancel Pressed'), 
          onPress: () => router.back(), 
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log('User created', user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
        // ..
      });
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 50,
      marginTop: 0,
      height: '100%',
      backgroundColor: Colors.WHITE,
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        marginTop: 20,
      }}>Create New Account</Text>

      <View style={{
        marginTop: 60,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>


      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View>
        <TouchableOpacity style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 99,
          marginTop: 20,
        }}
          onPress={onCreateAccount}
        >
          <Text style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 18,
          }}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.replace('auth/sign-in')}>
          <Text style={{
            fontFamily: 'outfit',
            color: Colors.PRIMARY,
            marginLeft: 5,
          }}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    fontFamily: 'outfit',
  }
})