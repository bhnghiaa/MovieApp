import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>SearchScreen</Text>
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

export default SearchScreen;