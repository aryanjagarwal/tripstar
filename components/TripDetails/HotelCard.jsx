import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function HotelCard({item}) {

    const [photoRef, setPhotoRef] = React.useState(null);
    useEffect(() => {
        GetGooglePhotoRef();
    }, []);

    const GetGooglePhotoRef = async () => {
        const result = await GetPhotoRef(item.name);
        //console.log(result);
        setPhotoRef(result.results[0]?.photos[0]?.photo_reference);
    }

  return (
    <View style={{
        marginRight: 15,
        width: 220,
    }}>
        <Image source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+photoRef+'&key='+ process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
            style={{
                width: 220,
                height: 130,
                borderRadius: 15,
            }}
        />
        <View style={{
            padding: 5,
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 17
            }}>{item.name}</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    fontFamily: 'outfit',
                }}>
                    ⭐: {item.rating}
                </Text>
                <Text style={{
                    fontFamily: 'outfit',
                }}>
                    💰: {item.price.replace(" (approx)", "").replace("]", "").replace("[", "")}
                </Text>
            </View>
        </View>
    </View>
  )
}