import React, { useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Navigator, navigation, navigate, useRouter, useNavigation } from 'expo-router';


const destinations = [
  { id: '1', name: 'Paris, France', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg' },
  { id: '2', name: 'Bali, Indonesia', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/11/fe/26/33.jpg' },
  { id: '3', name: 'Kyoto, Japan', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/11/c1/d3/18.jpg' },
  { id: '4', name: 'Jaipur, India', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/a8/0c/cc.jpg' },
  { id: '5', name: 'Goa, India', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fa/5a/13.jpg' },
  { id: '6', name: 'Bangkok, Thailand', image: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*c9Yr8qK9eX4OxUucGhjF8w.jpeg' },
  { id: '7', name: 'London, UK', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/16/20.jpg' },
  // Add more destinations as needed
];

const categories = [
  { id: '1', name: 'Beaches', icon: 'water' },
  { id: '2', name: 'Mountains', icon: 'analytics' },
  { id: '3', name: 'Cities', icon: 'business' },
  // Add more categories as needed
];


export default function discover({ navigationn }) {

  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        headerBackTitleVisible: false,
    })
}, [])
  

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Ionicons name={item.icon} size={24} color="#fff" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderDestination = ({ item }) => (
    <TouchableOpacity
      style={styles.destinationContainer}
      onPress={() => router.push('/create-trip/search-place')}
    >
      <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.7)']} style={styles.gradient}>
          <Text style={styles.destinationText}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Text style={styles.heroText}>Discover Your Next Adventure</Text>
          <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search destinations"
            placeholderTextColor="#aaa"
            onChange={() => router.push('/create-trip/search-place')}
          />
          </TouchableOpacity>
          
        </View>

        {/* Categories Section */}
        <View>
          <Text style={styles.sectionHeader}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Destinations Section */}
        <View>
          <Text style={styles.sectionHeader}>Popular Destinations</Text>
          <FlatList
            data={destinations}
            renderItem={renderDestination}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e90ff', // Matches the hero section background color
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  heroContainer: {
    padding: 20,
    backgroundColor: '#1e90ff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  heroText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categoriesList: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  categoryContainer: {
    backgroundColor: '#1e90ff',
    padding: 15,
    marginRight: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    marginTop: 5,
    color: '#fff',
    fontWeight: '600',
  },
  destinationContainer: {
    marginBottom: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'flex-end',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  destinationText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});