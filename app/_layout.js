import { Stack } from 'expo-router';
import { View ,StyleSheet} from 'react-native';
import { Audioprovider } from '../hooks/Audioprovider';

export default function RootLayout() {
  return (
    <Audioprovider>
       <Stack screenOptions={{
         headerShown:false,
       }}>
         <Stack.Screen name='Index'/>
       </Stack>
    </Audioprovider>
  );
}
