import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Screen({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.APP_BG,
        paddingTop:StatusBar.currentHeight
    }
})