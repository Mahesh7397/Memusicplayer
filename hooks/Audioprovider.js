import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import * as MediaLibrary from 'expo-media-library'

export class Audioprovider extends Component{
    constructor(props){
       super(props)
    }

    getPermission=async()=>{
        const permission=await MediaLibrary.getPermissionsAsync()
        console.log(permission)
    }

    componentDidMount(){
        getPermission()
    }
    render() {
      return (
        <View>
          <Text>Audioprovider</Text>
        </View>
      )
 }
}
