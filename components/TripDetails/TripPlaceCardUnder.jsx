import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking } from 'react-native';
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function TripPlaceCardUnder({ item }) {


    const [photoRef, setPhotoRef] = React.useState();
    useEffect(() => {
        GetGooglePhotoRef();
    }, []);

    const GetGooglePhotoRef = async () => {
        const result = await GetPhotoRef(item.name);
        //console.log(result);
        setPhotoRef(result.results[0]?.photos[0]?.photo_reference);
    }


    const handleNavigate = (location) => {
        // Google Maps URL with a query for a specific location
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    
        // Open the URL in the default browser or Google Maps app
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
      };

  return (
    <View style={{
        backgroundColor: Colors.LIGHT_BLUE,
        padding: 8,
        borderRadius: 15,
        borderColor: Colors.LIGHT_GRAY,
        marginTop: 14,
    }}>
        <Image source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+photoRef+'&key='+ process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
            style={{
                width: '100%',
                height: 150,
                borderRadius: 15,
            }}
        />
        <View style={{
            marginTop: 5,
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 17,
            }}>{item.name}</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 15,
                color: Colors.GRAY,
            }}>{item.details}</Text>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
            }}>
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.DIM_GRAY1,
                        marginTop: 5,
                    }}>🕐Time to spend: <Text style={{ fontFamily: 'outfit-bold', color: Colors.BLUE }}> {item?.time_to_spend ? item.time_to_spend : "Depends upon you"} </Text> </Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 8,
                    borderRadius: 100,
                }} onPress={() => handleNavigate(item.name)}>
                    <Ionicons name="navigate" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}