import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { FontAwesome5, Entypo,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AvengersScreen from './assets/Components/Screens/Home';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}



function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AvengersScreen />
    </View>
  );
}

function MoviesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const ListStack = createNativeStackNavigator();

function ListStackScreen() {
  return (
    <SettingsStack.Navigator>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const MoviesStack = createNativeStackNavigator();

function MoviesStackScreen() {
  return (
    <SettingsStack.Navigator>
      <MoviesStack.Screen name="Movies" component={MoviesScreen} />
      <MoviesStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Entypo name="home" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></Entypo>
                {/* <AntDesign name="home" size={25} color={focused ? 'red' : '#4f4d4e'}/> */}
              </View>
            )
          }}
        
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons name="settings-outline" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></Ionicons>
              </View>
          )
        }}
        >
          
        </Tab.Screen>
        <Tab.Screen name="List" component={ListStackScreen}
        options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome5 name="list-alt" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></FontAwesome5>
              </View>
          )
        }}
          
        >
          
        </Tab.Screen>
        <Tab.Screen name="Movies" component={MoviesStackScreen}
        options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <MaterialCommunityIcons name="movie-open-outline" size={25}
                color={focused ? '#f73e53' : 'gray'}
                ></MaterialCommunityIcons>
              </View>
          )
        }}
        
        >
         
        </Tab.Screen>

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}