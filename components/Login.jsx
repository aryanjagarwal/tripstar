import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Login = () => {

    const router = useRouter()

    return (
        <View>
            <Image source={require('./../assets/images/plane1.jpeg')}
                style={{ width: '100%', height: 520 }}
            />
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 28,
                        fontFamily: 'outfit-bold',
                        textAlign: 'center',
                        marginTop: 10,
                    }}
                >Trip Star</Text>
                <Text style={
                    {
                        fontSize: 18,
                        fontFamily: 'outfit',
                        textAlign: 'center',
                        marginTop: 15,
                        color: Colors.GRAY
                    }
                }>Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>

                <TouchableOpacity style={styles.button}
                    onPress={() => router.push('auth/sign-in')}
                >
                    <Text style={{color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit-medium',
                    fontSize:18,
                    }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        padding: 25,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 99,
        marginTop: '15%',
    }
})



export default Login