import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import image from '../../static/res/react.svg';

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 250,
        elevation: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 5,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20
    },
    text: {
        fontSize: 15
    },
    image: {
        width: 160,
        height: 160
    }
});

const ItemViewCard = () => {
    return (

        <React.Fragment>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../static/res/react.svg')}>
                </Image>
                <Text style={styles.titleText}>Item Name</Text>
                <Text style={styles.text}>Item Price</Text>
            </View>
        </React.Fragment>

    );
};

export default ItemViewCard;