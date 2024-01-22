import React from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from 'react-native';
import { COLORS } from '../theme/theme';
import CustomIcon from './CustomIcon';

const NowplayingCard = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <View style={[ styles.container, { maxWidth: props.cardWidth, maxHeight: props.cardHeight } ]}>
                    <Image
                        style={[ styles.cardImage, { width: props.cardWidth } ]}
                        source={{ uri: props.imagePath }}></Image>
                </View>
            </TouchableOpacity>
            <Text style={[ styles.text, { maxWidth: props.cardWidth } ]}>{props.title}</Text>
            <View style={styles.rate}>
                <CustomIcon name="star" size={16} color={COLORS.Yellow} style={styles.iconStar} />
                <Text style={styles.text}>{props.rate}({props.voteCount}) </Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: "center",
            }}>
                <TouchableOpacity style={styles.button} >
                    <CustomIcon name="ticket-sharp" size={16} color="white" />
                    <Text style={styles.buttonText}>Booking</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "Poppins",
        color: COLORS.Black,
        textAlign: 'center',
        marginTop: 10,
    },
    cardImage: {
        aspectRatio: 2 / 3,
        borderRadius: 20,
    },
    rate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 6,
    },
    button: {
        backgroundColor: COLORS.buttoncolor,
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        flexDirection: 'row',
        gap: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    iconStar: {
        fontSize: 22, marginTop: 8,
    }
});
export default NowplayingCard;


