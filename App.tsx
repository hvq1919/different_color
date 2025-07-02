import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import MainGamePlay from './src/screens/MainGamePlay';
import HomeScreen from './src/screens/HomeScreen';
import HighScoreScreen from './src/screens/HighScoreScreen';
import HelpScreen from './src/screens/HelpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Different Color Game', headerShown: false }}
        />
        <Stack.Screen 
          name="Game" 
          component={MainGamePlay} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HighScore" 
          component={HighScoreScreen} 
          options={{ title: 'Điểm cao' }}
        />
        <Stack.Screen 
          name="Help" 
          component={HelpScreen} 
          options={{ title: 'Hướng dẫn' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});