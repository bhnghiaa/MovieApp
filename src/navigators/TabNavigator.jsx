import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import SeatBookingScreen from '../screens/SeatBookingScreen';
import TicketScreen from '../screens/TicketScreen';
import UserScreen from '../screens/UserScreen';
import CustomIcon from '../components/CustomIcon';
import Icon from '../components/CustomIcon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../theme/theme';


const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.Background_nav, height: 60 },
        tabBarShowLabel: false,
    }}>
        <Tab.Screen
            name="video"
            component={HomeScreen}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <View>
                        {focused ? <CustomIcon name="home" size={32} color="white" /> : <CustomIcon name="home-outline" size={28} color="white" />}
                    </View>
                ),
            }}
        />

        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => (
                <View>
                    {focused ? <CustomIcon name="search-sharp" size={32} color="white" /> : <CustomIcon name="search-outline" size={28} color="white" />}
                </View>
            ),
        }} />

        <Tab.Screen name="Ticket" component={TicketScreen} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => (
                <View>
                    {focused ? <CustomIcon name="ticket-sharp" size={32} color="white" /> : <CustomIcon name="ticket-outline" size={28} color="white" />}
                </View>
            ),
        }} />

        <Tab.Screen name="User" component={UserScreen} options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => (
                <View>
                    {focused ? <CustomIcon name="person" person size={32} color="white" /> : <CustomIcon name="person-outline" size={28} color="white" />}
                </View>
            ),
        }} />
    </Tab.Navigator>
);
const styles = StyleSheet.create({
    activeTab: {
        // padding: 10,
        // backgroundColor: 'black',
        // borderRadius: 50,
    },
    nav: {

    }
});

export default TabNavigator;
