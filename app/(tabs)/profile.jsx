import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
//import firebase from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';
import { auth, app } from '../../configs/FirebaseConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useRouter, useNavigation } from 'expo-router';

export default function profile( { navigation } ) {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigation.navigate('Login'); // Redirect to login if not authenticated
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleSignOut = () => {
    auth.signOut().then(() => navigation.navigate('Login'));
  };

  


  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          {user.photoURL ? (
            <Image source={{ uri: user.photoURL }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Icon name="person-circle-outline" size={100} color="#fff" />
            </View>
          )}
        </View>
        <Text style={styles.userName}>{user.displayName || 'Anonymous User'}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.sectionTitle}>Account Information</Text>
        <View style={styles.profileRow}>
          <Icon name="person-outline" size={20} color="#888" />
          <Text style={styles.profileRowText}>Name: {user.displayName || 'Anonymous'}</Text>
        </View>
        <View style={styles.profileRow}>
          <Icon name="mail-outline" size={20} color="#888" />
          <Text style={styles.profileRowText}>Email: {user.email}</Text>
        </View>
        <View style={styles.profileRow}>
          <Icon name="call-outline" size={20} color="#888" />
          <Text style={styles.profileRowText}>Phone: {user.phoneNumber || 'Not provided'}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign Out" color="#FF6347" onPress={handleSignOut} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    backgroundColor: '#1e90ff',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#fff',
  },
  editProfileButton: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  editProfileButtonText: {
    color: '#1e90ff',
    fontSize: 16,
    fontWeight: '600',
  },
  profileDetails: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileRowText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
});