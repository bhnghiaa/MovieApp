import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const UserScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>UserScreen</Text>
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
export default UserScreen;