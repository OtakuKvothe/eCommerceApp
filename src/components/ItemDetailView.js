import React, { Component } from 'react';
import { Image, Text, Button, ScrollView, View, StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const ItemDetailView = ({ route }) => {

    let item = route.params.item;
    console.log(item);

    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={{ uri: item.image }}></Image>
            </View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Button title='Add Item To Cart'></Button>
        </ScrollView>
    );
}

export default ItemDetailView;

const styles = StyleSheet.create({
    image: {
        width: viewportWidth,
        height: 300
    }
})