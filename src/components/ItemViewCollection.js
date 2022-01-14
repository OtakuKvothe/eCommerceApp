import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View } from 'react-native';
import ItemViewCard from './ItemViewCard';

class ItemViewCollection extends Component {
    groupItems = (items, itemsPerRow) => {
        // let itemsGroups = [];
        // let group = [];
        // items.forEach((item) => {
        //     if (group.length === itemsPerRow) {
        //         itemsGroups.push(group);
        //         group = [item];
        //     } else {
        //         group.push(item);
        //     }
        // });

        // if (group.length > 0) {
        //     itemsGroups.push(group);
        // }
        let itemsx = [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
            [9, 10]
        ];
        //return itemsGroups;
        return itemsx;
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
        const groups = this.groupItems(this.props.items, this.props.itemsPerRow);
        return (
            <FlatList
                {...this.props}
                renderItem={this.rendergroup}
                data={groups}
            />
        );
    };

    renderItem(item, index) {
        return <ItemViewCard />
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