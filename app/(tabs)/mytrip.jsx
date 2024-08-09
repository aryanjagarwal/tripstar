import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';
import UserTripsList from '../../components/MyTrips/UserTripsList';
import { useRouter } from 'expo-router';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    user&&GetMyTrips();
  }, [user])

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, "UserTrips"), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev=>[...prev, doc.data()]);
    });
    setLoading(false);
    
  }

  return (
    <ScrollView style={{
      padding: 20,
      paddingTop: 60,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>

      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
          fontSize: 35,
          fontFamily: 'outfit-bold',
          color: Colors.PRIMARY
        }}>My Trips</Text>
        <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
        <Ionicons name="add-circle-outline" size={40} color="black"/>
        </TouchableOpacity>
        
      </View>
      {loading&&<ActivityIndicator size={'small'} color={Colors.PRIMARY}/>}

        {userTrips?.length==0? 
          <StartNewTripCard/> : <UserTripsList userTrips={userTrips}/>
        }

    </ScrollView>
  )
}