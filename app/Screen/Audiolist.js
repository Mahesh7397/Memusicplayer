import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import * as MediaLibrary from 'expo-media-library'

export default function Audiolist() {
  //  getPermission=async()=>{
  //      const permission=await MediaLibrary.getPermissionsAsync()
  //      console.log(permission)
  //  }
//
  //  useEffect(()=>{
  //      getPermission()
  //  },[])
//
  return (
    <View style={styles.container}>
      <Text>Audiolist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})