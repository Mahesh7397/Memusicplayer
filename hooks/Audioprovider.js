import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { Component ,createContext} from 'react'
import * as MediaLibrary from 'expo-media-library'
import {DataProvider} from 'recyclerlistview'

export const AudioContext=createContext()
export class Audioprovider extends Component{
  
    constructor(props){
       super(props);
       this.state={
        audioFiles:[],
        permissionError:false,
        dataProvider:new DataProvider((r1,r2)=>r1!==r2)
       }
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
        const {dataProvider,audioFiles}=this.state
        let media=await MediaLibrary.getAssetsAsync({
          mediaType:'audio'
        })
        media=await MediaLibrary.getAssetsAsync({
          mediaType:'audio',
          first:media.totalCount,
        })
        this.setState({
          ...this.state,dataProvider:dataProvider.cloneWithRows([...audioFiles,...media.assets]),audioFiles:[...audioFiles,...media.assets]
        })
     }

    getPermission=async()=>{
      /*{"accessPrivileges" : "none", "canAskAgain": true, "expires": "never", "granted": false, "statu s": "undetermined"}*/
        const permission=await MediaLibrary.getPermissionsAsync()
        if(permission.granted){
             this.getAaudiofiles()
        }
        if(!permission.granted && !permission.canAskAgain){
          this.setState({...this.state,permissionError:true})
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
             this.setState({...this.state,permissionError:true})
          }
        }
    }

    componentDidMount(){
        this.getPermission()
    }
    render() {
      const {audioFiles,dataProvider,permissionError}=this.state
      if(permissionError) return <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
         <Text style={{fontSize:25,textAlign:'center',color:'red'}}>it looks like you haven't accept the permission.</Text>
      </View>
      return (
       <AudioContext.Provider value={{audioFiles,dataProvider}}>
        {this.props.children}
       </AudioContext.Provider>
      )
 }
}
