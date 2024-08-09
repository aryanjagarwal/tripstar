import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TripPlaceCardUnder from './TripPlaceCardUnder'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking } from 'react-native';

export default function TripPlaceCard({ item }) {
  return (
    <View style={{
        marginRight: 15,
        //borderWidth: 1,
    }}>
        <View style={{
            padding: 0
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
                marginTop: 10,
            }}>{item.day}</Text>

            {item?.best_time_to_visit && (
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    color: Colors.DARK_GRAY1,
                    marginTop: 5,
                }} > Best time to visit: <Text style={{ color: Colors.BLUE, fontFamily: 'outfit-medium' }}>{item.best_time_to_visit}</Text></Text>
            )}

            <FlatList
                data={item.activities}
                renderItem={({ item, index }) => (
                    <TripPlaceCardUnder item={item} />
                )} // TOTOTOTOTO
            />
        </View>
    </View>
  )
}