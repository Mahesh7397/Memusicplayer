import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const getthletter=(filename)=> filename[0];

const convertime=(time)=>{
  var mind = time % (60 * 60);
  var minutes = Math.floor(mind / 60);
           
  var secd = mind % 60;
  var seconds = Math.ceil(secd); 
  if(seconds<10) return `${minutes}:0${seconds}`
  return `${minutes}:${seconds}`;
}

const Audiolistitem = ({title,duration,onOptionpress}) => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
          <View style={styles.thic}>
              <Text style={styles.thictext}>{getthletter(title)}</Text>
          </View>
          <View style={styles.titlecon}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.timetext} >{convertime(duration)}</Text>
          </View>
      </View>
      <View style={styles.rightcontainer}>
        <Pressable onPress={onOptionpress}>
      <Entypo name="dots-three-vertical" size={24} color={Colors.FONT_MEDIUM} /></Pressable>
      </View>
    </View>
    <View style={styles.seprate}/>
    </>
  )
}

export default Audiolistitem

const {width}=Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
         flexDirection:'row',
         alignSelf:'center',
         width:width-80,
         //backgroundColor:'red'
    },
    leftContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,

    },
    rightcontainer:{
       flexBasis:50,
       //backgroundColor:'yellow',
       //alignSelf:'flex-end',
       height:50,
       alignItems:'center',
       justifyContent:'center',
    },
    titlecon:{
       width:width-180,
       paddingLeft:10,
    },
    thic:{
       height:50,
       flexBasis:50,
       backgroundColor:Colors.FONT_LIGHT,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:25,
    },
    thictext:{
      fontSize:22,
      fontWeight:'bold',
      color:Colors.FONT,
    },
    title:{
     fontSize:16,
     color:Colors.FONT
    },
    seprate:{
      width:width-80,
      backgroundColor:'#333',
      opacity:0.3,
      height:0.5,
      alignSelf:'center',
      marginTop:10,
    },
    timetext:{
      fontSize:14,
      color:Colors.FONT_LIGHT
    }
})