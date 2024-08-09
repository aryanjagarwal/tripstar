import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function UserTripsCard({ trip }) {

    const formatData = (data) => {
        return JSON.parse(data);
    }
    const router = useRouter();
    //const LatestTrip = JSON.parse(userTrips[0].tripData)

    return (
        <View style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
        }}>
            {/*<Image 
        source={require('./../../assets/images/place.jpg')} 
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
      />
        */}
            <Image source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + formatData(trip.tripData).locationInfo.photoRef + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY }}
                style={{
                    // tripPan above
                    width: 100,
                    height: 100,
                    borderRadius: 15,
                }}
            />
            <View>
                <Text style={{
                    fontSize: 18,
                    fontFamily: 'outfit-medium',
                }}>{trip.tripPlan?.trip?.destination}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color: Colors.GRAY,
                    // tripPan abelow
                }}>{moment(formatData(trip.tripData).dates.startDate).format('DD MMM yyyy')}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color: Colors.GRAY,
                    // tripPan below
                }}>Travelling: {(formatData(trip.tripData).travaler.title)}</Text>
                <TouchableOpacity style={{
                    marginTop: 5,
                    padding: 5,
                    backgroundColor: Colors.LIGHT_GRAY,
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                }}
                onPress={()=>router.push({pathname: '/trip-details', params: {
                    trip: JSON.stringify(trip)
                }})}
                >
                    <Text style={{
                        color: Colors.PRIMARY,
                        fontFamily: 'outfit-medium',
                        fontSize: 14,
                        // tripPan below
                    }}>
                        View Details
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}