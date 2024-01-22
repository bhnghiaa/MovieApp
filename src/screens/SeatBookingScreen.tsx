import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const SeatBookingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SeatBookingScreen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
});

export default SeatBookingScreen;