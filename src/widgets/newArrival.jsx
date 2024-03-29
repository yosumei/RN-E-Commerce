//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, FlatList,Text, StyleSheet } from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import { getRequest } from '../service/verbs';
import { CATEGORY_URL, PRODUCTS_URL } from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';

// create a component
const NewArrival = () => {
    const [products, setProducts] = useState([])
    const getNewArrivalProducts = () => {
        getRequest(CATEGORY_URL+"/women's clothing")
            .then(response => {
                setProducts(response.data)

            })
    }

    useEffect(() => {
        getNewArrivalProducts()
    })
    return (
        <View style={styles.container}>
            <WidgetTitle title={"New Arrival"} category="women's clothing"/>
            <FlatList
            horizontal
            data={products}
            renderItem={({item})=><WidgetProductCard item={item} />} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default NewArrival;
