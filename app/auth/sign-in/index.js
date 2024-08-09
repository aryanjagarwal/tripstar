import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { useRouter } from 'expo-router'
import { Colors } from "./../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";


export default function SignIn() {

    const navigation = useNavigation();
    const router = useRouter()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const onSignIn = () => {


        if (!email && !password) {
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
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log('User signed in', user)
                router.replace('/mytrip')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/invalid-credential') {
                    Alert.alert('Wrong Credentials', 'Enter valid credentials', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'), 
                          //onPress: () => router.back(),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ]);
                }
                console.log(errorMessage, errorCode)
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
            }}>Let's Sign You In</Text>
            <Text style={{
                fontSize: 28,
                fontFamily: 'outfit',
                color: Colors.GRAY,
                marginTop: 20,
            }}>Welcome Back</Text>
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit',
                color: Colors.GRAY,
                marginTop: 10,
            }}>We've been missing you</Text>


            <View style={{
                marginTop: 40,
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setEmail(value)}
                    placeholder="Enter your email" />
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
                    onChangeText={(value) => setPassword(value)}
                    placeholder="Enter your password" />
            </View>


            <View>
                <Text style={{
                    textAlign: 'right',
                    fontFamily: 'outfit',
                    color: Colors.PRIMARY,
                    marginTop: 10,
                }}>Forgot Password?</Text>
            </View>

            {/* Sign In Button */}
            <View>
                <TouchableOpacity style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 15,
                    borderRadius: 99,
                    marginTop: 20,
                }}
                    onPress={onSignIn}
                >
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: 'outfit-medium',
                        fontSize: 18,
                    }}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.replace('auth/sign-up')}>
                    <Text style={{
                        fontFamily: 'outfit',
                        color: Colors.PRIMARY,
                        marginLeft: 5,
                    }}>Sign Up</Text>
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