import React,{useState} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Alert,Modal } from 'react-native'
import items from '../Items'
import Movies from '../movielist'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FontAwesome5} from '@expo/vector-icons'
import Ironman from './chareters/Ironman';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
    const [modelOpen, setModelOpen] = useState(false);

    return (
        <ScrollView
            vertical={true}
            scrollEventThrottle={16}
            style={{
                backgroundColor: 'white'
            }}
        >
            <View style={{flex:1,padding:20}}>
                <Text style={{fontSize: 24, fontWeight:'700',paddingHorizontal:20}}>
                    Avengers
                </Text>
                <View style={{ height: 250, marginTop: 20 }}>
                     <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            
                        >
                    {items.map(item => (
                        <View
                            style={{
                                height: 250,
                                width: 150,
                                marginLeft: 15,
                                borderWidth: 1,
                                borderColor: 'black',
                                borderRadius: 15
                                
                            }} key={item.id}>
                            <View style={{flex:4}}>
                                <Image source={item.Image}
                                style={{flex:1,width: null,height:null,resizeMode:'cover',borderRadius:15}}
                                />
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                    <Text style={{  paddingTop: 10, fontWeight: '700',fontSize:17 }}>{item.title}</Text>
                            </View>
                        </View>
                    ))}
                        
                    </ScrollView>

                </View>
            </View>
            <View>
                <Text style={{ paddingLeft: 40, fontSize: 20, fontWeight: '700' }}>Popular movies</Text>
                <ScrollView>
                    {Movies.map(movie => (
                        
                        <View style={{top:1,bottom:100}} key={movie.id}>
                            <TouchableOpacity
                             onPress={() => Alert.alert('Still working on this Screen')}
                            >
                            <View style={{ paddingTop:30}}>
                                <Text style={{fontSize:20,textAlign:'center',bottom:10}}>{movie.title}</Text>
                            </View>
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image style={{width:300,height:150,borderRadius:15}} source={movie.image}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    ))}
                </ScrollView>
                <View>
                    <Modal visible={modelOpen} animationType='slide'
                        transparent={true}
                        style={{
                            margintop: 200,
                            
                    }}
                    >
                        <View
                            style={{
                                // backgroundColor: 'rgba( 255, 255, 255, 0.95 )',
                                backgroundColor:'skyblue',
                                blurRadius:5,
                                top: 300,
                                paddingTop: 40,
                                paddingBottom: 400,
                                borderTopRightRadius: 50,
                                borderTopLeftRadius: 50,
                                
                        }}
                        >
                            <View style={{ marginLeft:'85%'}}>
                                <AntDesign name="closecircleo" size={30} color="black" onPress={() => setModelOpen(false)} />
                            </View>
                            <Ironman />
                        </View>
                    </Modal>
                <FontAwesome5 name="home" size={30} onPress={() =>setModelOpen(true)} />
                </View>
            </View>
        </ScrollView>
    )
}
