import { Stack } from 'expo-router';
import { View ,StyleSheet} from 'react-native';
import { Audioprovider } from '../hooks/Audioprovider';
import Audiolistitem from '../components/Audiolayout/Audiolistitem';

export default function RootLayout() {
  return (
       <Stack screenOptions={{
         headerShown:false,
       }}>
         <Stack.Screen name='Index'/>
       </Stack>
       //<View style={{marginTop:50}}>
       // <Audiolistitem/>
       //</View>
    
  );
}
