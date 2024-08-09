import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';

export default function SelectDates() {

    const navigation = useNavigation();
    const router = useRouter();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
        })
    }, [])


    const onDateChange = (date, type) => {
        if (type == 'START_DATE') {
            setStartDate(moment(date));
        } else {
            setEndDate(moment(date));
        }
    }

    const onDateSelection = () => {
        if (!startDate && !endDate) {
            Alert.alert('Missing traveling dates', 'Enter your traveling dates', [
                {
                  text: 'Cancel',
                  //onPress: () => console.log('Cancel Pressed'), 
                  onPress: () => router.back(), 
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
              return;
        }
        const totalNoOfDays = endDate.diff(startDate, 'days');
        setTripData({
            ...tripData,
            dates: {
                startDate: startDate,
                endDate: endDate,
                totalNoOfDays: totalNoOfDays + 1,
            }
        });
        router.push('create-trip/select-budget');
    }

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
            }}>Travel Dates</Text>

            <View style={{
                marginTop: 30,
            }}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection={true}
                    minDate={new Date()}
                    maxRangeDuration={20}
                    selectedRangeStyle={{
                        backgroundColor: '#befc7c',

                    }}
                    selectedDayTextStyle={{
                        color: 'black',
                    }}
                />
            </View>

            <TouchableOpacity style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 30,
            }}
                onPress={onDateSelection}
            >
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                    color: Colors.WHITE,
                }}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}