import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveler() {

  const navigation = useNavigation();
  const router = useRouter();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);


  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitleVisible: false,
    })
  }, [])

  useEffect(() => {
    setTripData({
      ...tripData,
      travaler: selectedTraveler
    })
  }, [selectedTraveler])

  const onClickNext = () => {
    if (!selectedTraveler) {
      Alert.alert('Missing traveler', 'Enter Traveler', [
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
    router.push('create-trip/select-dates')
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
      }}>Who's traveling</Text>

      <View style={{
        marginTop: 20,
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
        }}>Choose travellers</Text>

        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}>
              <OptionCard option={item} selectedOption={selectedTraveler} />
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
      onPress={onClickNext}
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
// TouchableOpacity: app/components/CreateTrip/OptionCard.jsx