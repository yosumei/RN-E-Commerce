//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, FlatList,Text, StyleSheet } from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import { getRequest } from '../service/verbs';
import { CATEGORİES_URL, PRODUCTS_URL } from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';
import CategorySelect from '../components/widgets/categorySelect';

// create a component
const BestSeller = () => {
    const [products, setProducts] = useState([])
    const getBestSellerProducts = (category="men's clothing") => {
        getRequest(CATEGORİES_URL+`/${category}`)
            .then(response => {
                setProducts(response.data);
                 

            })
    }

    useEffect(() => {
        getBestSellerProducts()
    })
    return (
        <View style={styles.container}>
            <WidgetTitle title={"Best Seller"} category="women's clothing"/>
            <CategorySelect
            onSelect={(value)=>getBestSellerProducts(value)} />
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
export default BestSeller;
