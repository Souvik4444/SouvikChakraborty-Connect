import React from 'react';
import { Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Sector from './Screens/Sector'; 
import { ht, vt } from './utils/normalize';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom Tab Bar Icon Component
const TabIcon = ({ iconSource, label, focused }) => (
  <View style={
    { flexDirection: 'row',
       alignItems: 'center',       
        backgroundColor: focused? '#EEE6FF' : 'transparent',
        borderRadius:50,
        paddingHorizontal:10,
        height: ht(40),
        // height: vt(40)
    }}>
    <Image
      source={iconSource}
      style={{
        width: focused ? 24 : 20,
        height: focused ? 24 : 20,
        tintColor: focused ? '#845EC2' : '#2E2D77',
      }}
    />
    {focused && (
      <Text
        style={{
          color: '#845EC2',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 8,
        }}
      >
        {label}
      </Text>
    )}
  </View>
);

// Stack Navigator for Home and Sector Screens
const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Sector"
      component={Sector}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Tab Navigator with the custom footer
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
                tabBarStyle: {
          backgroundColor: '#fff',
          height: ht(64),
          paddingHorizontal:ht(10),
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 5,
        },
      }}
    >
      <Tab.Screen
    //   headerShown={false}
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconSource={require('./Assets/house.png')} // Change to your home icon
              label="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Sector} // Placeholder screen for Search
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconSource={require('./Assets/searchblack.png')} // Change to your search icon
              label="Search"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Sector} // Placeholder screen for Video
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconSource={require('./Assets/video.png')} // Change to your video icon
              label="Video"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Sector} // Placeholder screen for Profile
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconSource={require('./Assets/profile.png')} // Change to your profile icon
              label="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
