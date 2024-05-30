import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { Component ,createContext} from 'react'
import * as MediaLibrary from 'expo-media-library'

export const AudioContext=createContext()
export class Audioprovider extends Component{
  
    constructor(props){
       super(props)
    }

    permissionAllert=()=>{
      Alert.alert("permission required","This app needs to read audio files!",[{
        text:'I am ready'
      },{
        text:'cancle',
        onPress:()=>this.permissionAllert()
      }])
    }
     getAaudiofiles=async()=>{
        const media=await MediaLibrary.getAssetsAsync({
          mediaType:'audio'
        })
        console.log(media)
     }

    getPermission=async()=>{
      /*{"accessPrivileges" : "none", "canAskAgain": true, "expires": "never", "granted": false, "statu s": "undetermined"}*/
        const permission=await MediaLibrary.getPermissionsAsync()
        if(permission.granted){
             this.getAaudiofiles()
        }
        if(!permission.granted && permission.canAskAgain){
          const {status,canAskAgain}= await MediaLibrary.requestPermissionsAsync()
          if(status==='denied' && canAskAgain){
             this.permissionAllert()
          }
          if(status==='granted'){
              this.getAaudiofiles()
          }
          if(status==='denied' && canAskAgain){

          }
        }
    }

    componentDidMount(){
        this.getPermission()
    }
    render() {
      return (
       <AudioContext.Provider value={{}}>
        {this.props.children}
       </AudioContext.Provider>
      )
 }
}
