import { Modal, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function OptionModal({visible,requestclose}) {
  return (
    <>
    <StatusBar hidden/>
    <Modal transparent animationType='slide' visible={visible} onRequestClose={requestclose}>
        <View style={styles.modul}>
          <Text style={styles.title}>song title</Text>
          <View style={styles.optioncon}>
            <Text style={styles.option}>play</Text>
            <Text style={styles.option}>add to playlist</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={requestclose}>
        <View style={styles.modulbg}/>
        </TouchableWithoutFeedback>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    modul:{
      position:'absolute',
      bottom:0,
      right:0,
      left:0,
      backgroundColor:Colors.APP_BG,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      zIndex:1000
    },
    title:{
      fontSize:18,
      fontWeight:'bold',
      padding:20,
      paddingBottom:0,
      color:Colors.FONT_MEDIUM
    },
    optioncon:{
        padding:20
    },
    option:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.FONT,
        paddingVertical:10,
        letterSpacing:1,
    },
    modulbg:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:Colors.MODAL_BG
    }
})