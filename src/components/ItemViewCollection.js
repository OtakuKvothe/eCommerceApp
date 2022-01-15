import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View, Text } from 'react-native';
import ItemViewCard from './ItemViewCard';

var CARDS_PER_ROW = 2;

class ItemViewCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loadad: false
        }
        this.fetchData();
    }

    fetchData() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            //.then(json=>console.log(json))
            .then((responseData) => {
                this.setState({
                    dataSource: responseData,
                    loadad: true
                });
            }).done();
        //console.log('In fetchdata\n' + this.state.dataSource);
    }

    groupItems = (items, itemsPerRow) => {
        //console.log('In groupitems' + items);
        let itemsGroups = [];
        let group = [];
        items.forEach((item) => {
            if (group.length === itemsPerRow) {
                itemsGroups.push(group);
                group = [item];
            } else {
                group.push(item);
            }
        });

        if (group.length > 0) {
            itemsGroups.push(group);
        }
        //console.log('In ItemGroups\n' + itemsGroups);
        return itemsGroups;
    };

    rendergroup = ({ item }) => {
        const items = item.map((item, index) => {
            return this.renderItem(item, index);
        });
        return (
            <View style={styles.group}>
                {items}
            </View>
        );
    };

    render = () => {
        if (this.state.loadad === true) {
            const groups = this.groupItems(this.state.dataSource, CARDS_PER_ROW);
            //console.log('Groups\n' + groups);
            return (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    {...this.props}
                    renderItem={this.rendergroup}
                    data={groups}
                    keyExtractor={(item, index) => index.toString()}
                />
            );
        }
        else {
            return (
                <Text>Data Loading</Text>
            )
        }
    };

    renderItem(item, index) {
        return <ItemViewCard item={item} index={index} key={index} />
    }
}

var styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    }
});

export default ItemViewCollection;