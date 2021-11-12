import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import items from '../Items'
import Movies from '../movielist'

export default function HomeScreen() {
    return (
        <ScrollView
            vertical={true}
            scrollEventThrottle={16}
            style={{
                backgroundColor: '#fff'
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
                        <View style={{ height: 250, width: 150 ,marginLeft:15 }} key={item.id}>
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
                        <View key={movie.id}>
                            <View style={{paddingLeft:40, paddingTop:50}}>
                                <Text>{movie.title}</Text>
                            </View>
                            <View>
                                {/* <Image source={require({movie.image})}/> */}
                            </View>
                        </View>
                        
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}
