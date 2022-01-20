import React, { Component } from 'react';
import { Image, Text, Button, ScrollView, View, StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const ItemDetailView = () => {

    render = () => {
        return (
            <ScrollView>
                <View>
                    <Image style={styles.image} source={require('../../static/res/react.svg')}></Image>
                </View>
                <Text>Item Name</Text>
                <Text>Item Price</Text>
                <Button title='Add Item To Cart'></Button>
            </ScrollView>
        )
    }
}

export default ItemDetailView;

const styles = StyleSheet.create({
    image: {
        width: viewportWidth,
        height: 300
    }
})