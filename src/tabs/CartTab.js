import React, { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../../Context';
import { ListItem, Avatar } from 'react-native-elements';

function CartTab({ navigation }) {
    const { getCart, emptyCart, removeItem } = useContext(Context);

    let data = getCart();

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <ListItem bottomDivider>
                <Avatar source={{ uri: item.image }} />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>₹ {item.price * 100}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    );

    return (
        <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

export default CartTab;