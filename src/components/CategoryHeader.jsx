import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';
const CategoryHeader = (props) => {
    return (
        <Text style={styles.text}>{props.title}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Poppins-Bold",
        color: COLORS.textcolor,
        marginVertical: 30,
        marginHorizontal: 20,
    }
});
export default CategoryHeader;


