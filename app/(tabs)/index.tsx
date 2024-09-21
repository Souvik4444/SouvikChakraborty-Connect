import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Home from '../../app/src/Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../src/navigator';
// import {Home}

export default function App() {
  return (

    // <NavigationContainer>
      <TabNavigator />
    // </NavigationContainer>
  //   <>
  //  <Home/>
  //  </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
