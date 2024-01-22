import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomIcon from './CustomIcon';
import { COLORS } from '../theme/theme';

const InputHeader = (props: any) => {
    const [ searchText, setSearchText ] = useState<string>('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={TextInput => setSearchText(TextInput)}
                value={searchText}
                placeholder="Search your movies..."
                placeholderTextColor="#9D9CA2">
            </TextInput>
            <TouchableOpacity onPress={() => props.searchFunction(searchText)}>
                <CustomIcon name="search" size={28} color="#9D9CA2" />
            </TouchableOpacity>

        </View >
    );
};

export default InputHeader;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.Background_input,
        alignItems: 'center',
    },
    textInput: {
        color: '#9D9CA2',
        width: '90%',
        fontFamily: "Poppins-Regular",
        fontSize: 18,
    }
});


