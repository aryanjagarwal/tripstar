import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({ flightData }) {

    const handleBookNowPress = () => {
        const bookingUrl = 'https://www.skyscanner.co.in/'; // Replace with your actual flight booking URL
        Linking.openURL(bookingUrl)
            .catch(err => console.error("Failed to open URL:", err));
    };


    return (
        <View style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors.LIGHT_GRAY,
            padding: 10,
            borderRadius: 10,
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                }}>✈️ Flights</Text>
                <TouchableOpacity style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 7,
                    borderRadius: 7,
                    width: 100,
                    marginTop: 7,
                }}
                    onPress={handleBookNowPress}
                >
                    <Text style={{
                        color: Colors.WHITE,
                        fontFamily: 'outfit',
                        textAlign: 'center',
                    }}>Book Now</Text>
                </TouchableOpacity>
            </View>

            <Text style={{
                fontSize: 18,
                fontFamily: 'outfit',
                marginTop: 7,
            }}>Airline: XYZ</Text>
            <Text style={{
                ontSize: 18,
                fontFamily: 'outfit',
            }}>Price: {flightData.price}</Text>

        </View>
    )
}