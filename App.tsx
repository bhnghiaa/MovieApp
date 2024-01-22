
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomIcon from './src/components/CustomIcon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
import TabNavigator from './src/navigators/TabNavigator';

import { nowPlayingMovies, upcomingMovies, popularMovies, searchMovies } from './src/api/apicalls';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{ animation: 'slide_from_left' }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="SeatBooking" component={SeatBookingScreen} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {}
// });

export default App;