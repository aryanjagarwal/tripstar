import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import UserTripsCard from './UserTripsCard'
import { useRouter } from 'expo-router'

export default function UserTripsList({ userTrips }) {

    const LatestTrip = JSON.parse(userTrips[0].tripData) // tripPan
    const router = useRouter();

    return (
        <View>
            <View style={{
                marginTop: 20,
            }}>
                {LatestTrip?.locationInfo?.photoRef? 
                <Image source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo.photoRef+'&key='+ process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                    style={{
                        width: '100%',
                        height: 240,
                        borderRadius: 10,
                        objectFit: 'cover',
                    }}
                />
                :
                <Image
                    source={require('./../../assets/images/place.jpg')}
                    style={{
                        width: '100%',
                        height: 240,
                        borderRadius: 10,
                        objectFit: 'cover',
                    }}
                />
                }
                
                <View style={{
                    marginTop: 10,
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'outfit-medium',
                    }}>
                        {userTrips[0]?.tripPlan?.trip?.destination}
                    </Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                    }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 18,
                            color: Colors.GRAY,
                        }}>{moment(LatestTrip.dates.startDate).format('DD MMM yyyy')}</Text>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 18,
                            color: Colors.GRAY,
                        }}>🚎{LatestTrip.travaler?.title}</Text>

                    </View>

                    <TouchableOpacity 
                        onPress={()=>router.push({pathname: '/trip-details', params: {
                            trip: JSON.stringify(userTrips[0])
                        }})}
                        style={{
                        backgroundColor: Colors.PRIMARY,
                        padding: 15,
                        borderRadius: 15,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            textAlign: 'center',
                            fontSize: 16,
                            color: Colors.WHITE
                        }}>See your plan</Text>
                    </TouchableOpacity>
                </View>

                {userTrips.map((trip, index) => (
                    <UserTripsCard trip={ trip} key={index}/>
                ))}

            </View>
        </View>
    )
}