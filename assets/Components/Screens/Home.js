import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import items from '../Items'

export default function HomeScreen() {
    return (
        <ScrollView
        scrollEventThrottle={16}
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
                            <View style={{flex:1}}>
                                    <Text style={{ paddingLeft: 20, paddingTop: 10, fontWeight: '700' }}>{item.title}</Text>
                            </View>
                        </View>
                    ))}
                        
                    </ScrollView>

                </View>
            </View>
        </ScrollView>
    )
}
