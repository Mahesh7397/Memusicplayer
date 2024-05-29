import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Audiolist from './Screen/Audiolist'
import Player from './Screen/Player'
import Playlist from './Screen/Playlist';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tabs=createBottomTabNavigator()
export default function index() {
  return (
    <Tabs.Navigator >
        <Tabs.Screen name='Audiolist' component={Audiolist} options={{
            tabBarIcon:(color)=><MaterialIcons name="headset" size={30} color={color} />
        }}/>
        <Tabs.Screen name='Player' component={Player} options={{
            tabBarIcon:(color)=><FontAwesome5 name="compact-disc" size={30} color={color} />
        }}/>
        <Tabs.Screen name='Playlist' component={Playlist} options={{
            tabBarIcon:(color)=><MaterialIcons name="library-music" size={30} color={color} />
        }}/>
    </Tabs.Navigator>
  )
}
