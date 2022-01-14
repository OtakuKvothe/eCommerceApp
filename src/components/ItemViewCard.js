import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 250,
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 5,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    titleText: {
        fontSize: 22
    },
    text: {
        fontSize: 16
    },
    image: {
        width: 160,
        height: 160,
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: 5
    }
});

const ItemViewCard = () => {
    return (

        <React.Fragment>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../static/res/react.svg')}>
                </Image>
                <Text style={styles.titleText}>React Logo</Text>
                <Text style={styles.text}>₹400</Text>
            </View>
        </React.Fragment>

    );
};

export default ItemViewCard;