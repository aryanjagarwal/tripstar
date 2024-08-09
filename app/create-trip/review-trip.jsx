import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import Entypo from '@expo/vector-icons/Entypo';
import moment from 'moment';

export default function ReviewTrip() {

    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
        })
    }, [])

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 35,
                fontFamily: 'outfit-bold',
                marginTop: 20,
            }}>Review Trip</Text>

            <View style={{
                marginTop: 15,
            }}>
                <Text style={{
                    fontSize: 15,
                    fontFamily: 'outfit-medium',
                    color: Colors.GRAY,
                }}>Before generating your trip, Please review your selections</Text>

                <View style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Text style={{
                        fontSize: 45,
                    }}>📍</Text>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                        }}>Destination</Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit-medium',
                            color: Colors.BLACK,
                        }}>{tripData?.locationInfo?.name}</Text>
                    </View>
                </View>


                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Text style={{
                        fontSize: 45,
                    }}>📆</Text>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                        }}>Travel Dates</Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit-medium',
                            color: Colors.BLACK,
                        }}>{moment(tripData?.dates?.startDate).format('DD MMM') + " To " + moment(tripData?.dates?.endDate).format('DD MMM') + "   "}
                            ({tripData?.dates?.totalNoOfDays} days)
                        </Text>
                    </View>
                </View>


                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Text style={{
                        fontSize: 45,
                    }}>🚎</Text>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                        }}>Who's traveling</Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit-medium',
                            color: Colors.BLACK,
                        }}>{tripData?.travaler?.title}
                        </Text>
                    </View>
                </View>


                <View style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}>
                    <Text style={{
                        fontSize: 45,
                    }}>＄</Text>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit',
                            color: Colors.GRAY,
                        }}>Budget</Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit-medium',
                            color: Colors.BLACK,
                        }}>{tripData?.budget}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 15,
                    marginTop: 60,
                }}
                    onPress={() => router.replace('create-trip/generate-trip')}
                >
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-medium',
                        textAlign: 'center',
                        color: Colors.WHITE,
                    }}>Generate My Trip</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
// TouchableOpacity is a wrapper around the view component that allows you to detect when a user taps on it.