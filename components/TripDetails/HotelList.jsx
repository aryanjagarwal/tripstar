import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { GetPhotoRef } from '../../services/GooglePlaceApi'
import HotelCard from './HotelCard'

export default function HotelList({ hotelList }) {

    

    return (
        <View style={{
            marginTop: 20,
        }}>
            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit-bold',
            }}>🏨 Hotels Recommendations</Text>

            <FlatList
                data={hotelList}
                style={{
                    marginTop: 8,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <HotelCard item={item} />
                )}
            />
        </View>
    )
}