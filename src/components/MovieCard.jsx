import React from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { COLORS } from '../theme/theme';
const MovieCard = (props) => {

    return (
        <TouchableOpacity>
            <View style={[ styles.container, { maxWidth: props.cardWidth, maxHeight: props.cardHeight } ]}>
                <Image
                    style={[ styles.cardImage, { width: props.cardWidth } ]}
                    source={{ uri: props.imagePath }}></Image>
                <Text style={[ styles.text, { maxWidth: props.cardWidth } ]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Poppins",
        color: COLORS.Black,
        textAlign: 'center',
        marginVertical: 10,
    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: 20,
    }
});
export default MovieCard;


