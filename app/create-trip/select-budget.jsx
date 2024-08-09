import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';

export default function SelectBudget() {

    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState();
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

    useEffect(() => {
        selectedOption && setTripData({
            ...tripData,
            budget: selectedOption?.title
        })
    }, [selectedOption])

    const onClickContinue = () => {
        if (!selectedOption) {
            Alert.alert('Missing budget details', 'Enter your budget', [
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
        router.push('create-trip/review-trip');
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
            }}>Spendings</Text>

            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                    color: Colors.GRAY
                }}>Choose spendings for your trip</Text>

                <FlatList
                    data={SelectBudgetOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{
                            marginVertical: 10,
                        }}
                            onPress={() => setSelectedOption(item)}
                        >
                            <OptionCard option={item} selectedOption={selectedOption} />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <TouchableOpacity style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 20,
            }}
            onPress={onClickContinue}
            >
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                    color: Colors.WHITE,
                }}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}
// TouchableOpacity