//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppColors } from '../../theme/colors';
import StoreContext from '../../context';
import CartCard from '../../components/cart/cartCard';
import { screenStyle } from '../../style/screenStyle';
import Summary from '../../components/cart/summary';

// create a component
const Card = () => {
    const {cart}=useContext(StoreContext)
    return (
        <View style={screenStyle.container}>
    <FlatList
data={cart}
renderItem={({ item }) => <CartCard item={item} />} />        

<Summary/>
</View>

    );
};


//make this component available to the app
export default Card;
