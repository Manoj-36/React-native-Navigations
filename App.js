import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import * as React from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './assets/Components/Screens/Home';
import IronMan from './assets/Components/Screens/chareters/Ironman';

import {FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
      }}
        screenOptions={{
        // headerShown: false,
          
          headerStyle: {
            backgroundColor: 'skyblue',
            
          },
          tabBarStyle: {
            height: 60,
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius:10,
            position: 'absolute',
            // backgroundColor: 'rgba( 255, 255, 255, 0.85 )',
            backgroundColor:'white',
            borderColor: 'rgba( 255, 255, 255, 0.18 );',
            
            
           
          }
        }}
        
      >
          {

          }
          <Tab.Screen name={"Home"} component={HomeScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
                <FontAwesome5 name="home" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></FontAwesome5>
                {/* <AntDesign name="home" size={25} color={focused ? 'red' : '#4f4d4e'}/> */}
              </View>
            )
          }} ></Tab.Screen>

          <Tab.Screen name={"Search"} component={ChatScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
                <FontAwesome5 name="search" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></FontAwesome5>
                {/* <AntDesign name="search1" size={25} color="black" /> */}
              </View>
            )
        }}></Tab.Screen>
        
        <Tab.Screen name={"Add"} component={AddScreen} options={{
            tabBarIcon: ({focused}) => (
            <View>
              {/* <Feather name="tool" size={28} color={focused ? 'black' : '#4f4d4e'}  /> */}
              <FontAwesome5 name="toolbox" size={30} color={focused ? '#f73e53' : 'gray'}  />
              </View>
            )
          }}></Tab.Screen>

          <Tab.Screen name={"Notification"} component={NotificationScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
                <FontAwesome5 name="bell" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></FontAwesome5>
                {/* <AntDesign name="home" size={24} color="black" /> */}
              </View>
            )
          }}></Tab.Screen>

          <Tab.Screen name={"settings"} component={SettingsScreen} options={{
            tabBarIcon: ({focused}) => (
              <View>
                {/* <AntDesign name="home" size={24} color="black" /> */}
                <Ionicons name="person" size={25}
                color={focused ? '#f73e53' : 'gray'}
                 />
              </View>
            )
          }}></Tab.Screen>

      </Tab.Navigator>

    </NavigationContainer>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>hello</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
