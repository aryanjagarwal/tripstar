import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking } from 'react-native';
import TripPlaceCardUnder from './TripPlaceCardUnder';
import TripPlaceCard from './TripPlaceCard';

export default function PlannedTrip({ details }) {


    const handleNavigate = (location) => {
        // Google Maps URL with a query for a specific location
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    
        // Open the URL in the default browser or Google Maps app
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
      };

    return (
        <View style={{
            marginTop: 20,
        }}>
            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit-bold',
            }}>🏕️ What to do
            </Text>


            <FlatList
                data={details}
                style={{
                    marginTop: 10,
                }}
                //horizontal={true}
                //showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TripPlaceCard item={item} />
                )}
            />
        </View>
    )
}