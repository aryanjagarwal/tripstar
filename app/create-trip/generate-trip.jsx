import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModel';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from './../../configs/FirebaseConfig';
import uuid from 'react-native-uuid';

export default function GenerateTrip() {

  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    GenerateAiTrip();
  }, [])

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', tripData?.locationInfo?.name)
      .replace('{totalDays}', tripData?.dates?.totalNoOfDays)
      .replace('{totalNights}', tripData?.dates?.totalNoOfDays - 1)
      .replace('{travaler}', tripData?.travaler?.title)
      .replace('{budget}', tripData?.budget)
      .replace('{totalDays}', tripData?.dates?.totalNoOfDays)
      .replace('{totalNights}', tripData?.dates?.totalNoOfDays - 1);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const tripResp = JSON.parse(result.response.text());
    setLoading(false);

    const docId = uuid.v4().toString();

    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResp,
      tripData: JSON.stringify(tripData), // tripPan
      docId: docId,
    });

    router.push('(tabs)/mytrip');

    //router.push('(tabs)/mytrip');
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
        textAlign: 'center',
        marginTop: 20,
      }}>Please Wait...</Text>
      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        marginTop: 40,
      }}>We're working to generate your adventurous trip</Text>

      <Image source={require('./../../assets/images/gif6.gif')} style={{
        width: '100%',
        height: 300,
        marginTop: 30,
        objectFit: 'contain'
      }} />

      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit-medium',
        textAlign: 'center',
        marginTop: 30,
        color: Colors.GRAY,
      }}>Do not go back</Text>
    </View>
  )
}