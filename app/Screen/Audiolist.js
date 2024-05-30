import { Text, View ,StyleSheet, ScrollView, Dimensions} from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from '../../hooks/Audioprovider'
import { LayoutProvider, RecyclerListView } from 'recyclerlistview'
import Audiolistitem from '../../components/Audiolayout/Audiolistitem'
import Screen from '../../components/Screen'
import OptionModal from '../../components/OptionModal'

export class Audiolist extends Component {
  
  static contextType=AudioContext
 
  constructor(props){
    super(props)
    this.state={
      optionmodulvisiblity:false
    }
  }

  layoutProvider=new LayoutProvider((i)=>'audio', (type,dim)=>{
    switch(type){
      case 'audio':
        dim.width=Dimensions.get('window').width;
        dim.height=70;
        break;
        default:
        dim.height=0;
        dim.width=0;
    }
    
  })

  rowrender=(type,item)=>{
    //console.log(item)
    return <Audiolistitem title={item.filename} duration={item.duration} onOptionpress={()=>{
      this.setState({...this.state,optionmodulvisiblity:true})
    }}/>
  }

  render() {
    return <AudioContext.Consumer>
      {({dataProvider})=>{
         return(
         <Screen><RecyclerListView dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowrender} />
         <OptionModal visible={this.state.optionmodulvisiblity} requestclose={()=>{
          this.setState({...this.state,optionmodulvisiblity:false})
         }}/></Screen>)
      }}
    </AudioContext.Consumer>
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