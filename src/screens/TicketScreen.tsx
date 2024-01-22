import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const TicketBookingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>TicketBookingScreen</Text>
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

export default TicketBookingScreen;