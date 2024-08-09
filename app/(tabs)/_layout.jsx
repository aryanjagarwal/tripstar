import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.PRIMARY,
    }}>
        <Tabs.Screen name="mytrip"
          options={{
            tabBarLabel: 'My Trips',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen name="discover" 
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name={focused ? "map" : "map-outline"} color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen name="profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
            ),
          }}
        />
    </Tabs>
  )
}