import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export class Audiolist extends Component {
  
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Audiolist</Text>
      </View>
    )
  }
}

export default Audiolist


const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      }
  })