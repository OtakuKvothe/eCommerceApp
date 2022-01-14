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
        margin: 5,
        justifyContent: 'flex-start',
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

const ItemViewCard = (item, index) => {
    console.log('In ItemsCard\n'+item);
    return (
        <React.Fragment>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../static/res/react.svg')}>
                </Image>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.text}>{item.price}</Text>
            </View>
        </React.Fragment>
    );
};

export default ItemViewCard;