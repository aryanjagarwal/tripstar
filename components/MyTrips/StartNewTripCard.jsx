import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

  const router = useRouter();

  return (
    <View style={{
        padding: 20,
        marginTop: 20,
        display:'flex',
        alignItems:'center',
        gap: 25,
    }}>
      <Ionicons name="location-sharp" size={34} color="black" />
        <Text style={{
            fontSize: 23,
            fontFamily: 'outfit-bold',
            color: 'black',
            marginTop: 10
        }}>
            No trips planned yet
        </Text>
        <Text style={{
            fontSize: 19,
            fontFamily: 'outfit',
            color:Colors.GRAY,
            marginTop: 10,
            textAlign: 'center'
        }}>
            Looks like you haven't planned any trips yet. Start by adding a new trip.
        </Text>
        <TouchableOpacity 
          onPress={()=>router.push('/create-trip/search-place')}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 13,
            borderRadius: 15,
            paddingHorizontal: 30,
            marginTop: 10,
        }}>
          <Text style={{
              color: 'white',
              fontSize: 18,
              fontFamily: 'outfit-medium',
              textAlign: 'center'
          }}>
            Start a new trip
          </Text>
        </TouchableOpacity>
    </View>
  )
}