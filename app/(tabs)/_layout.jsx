import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants'; // Assuming you have an 'icons' object in your constants folder

// TabIcon Component
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 8, // Add padding above the icon to create space
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: color,
          marginBottom: 4, // Adds some space between the icon and the label
        }} // Icon style
      />
      <Text
        style={{
          color,
          fontSize: 12, // Adjust the font size as needed
          fontWeight: focused ? '600' : '400', // Dynamically set font weight based on focus
        }}
      >
        {name}
      </Text>
    </View>
  );
};


// Tabs Layout
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true, // Set to true if you want to show labels
        tabBarActiveTintColor: '#FFA001', // Active tab color
        tabBarInactiveTintColor: '#CDCDE0', // Inactive tab color
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 80, // Adjusted height for better tab layout
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home} // Pass the icon here
              color={color} // Pass the color here
              // name="Home" // Pass the name here
              focused={focused} // Pass the focused state here
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark} // Pass the icon here
              color={color} // Pass the color here
              // name="Bookmark" // Pass the name here
              focused={focused} // Pass the focused state here
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.create} // Pass the icon here
              color={color} // Pass the color here
              // name="Create" // Pass the name here
              focused={focused} // Pass the focused state here
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile} // Pass the icon here
              color={color} // Pass the color here
              // name="Profile" // Pass the name here
              focused={focused} // Pass the focused state here
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
