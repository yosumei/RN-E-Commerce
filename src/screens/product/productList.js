//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { PRODUCTS_URL } from '../../service/urls';
import ProductCard from '../../components/product/productCard';
import { useEffect } from 'react';
import { getRequest } from '../../service/verbs';
import { screenStyle } from '../../style/screenStyle';
import { AppColors } from '../../theme/colors';
import CategorySelect from '../../components/widgets/categorySelect';
import { Category } from 'iconsax-react-native';

// create a component
const Productlist = ({route}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState([false]);
    const productCategory=route?.params?.category

    const getAllProducts = category => {
        const url=category
        ? PRODUCTS_URL+`/category/${category}`
        :PRODUCTS_URL;
        setLoading(true);
        getRequest(url) 
            .then(response => {
                setProducts(response.data)

            })
            .catch(error => {

            }).finally(() =>
                setLoading)
    }

    useEffect(() => {
        getAllProducts(productCategory)
    })

    return (
        <View style={screenStyle.container}>
            <CategorySelect
                onSelect={(value) => getAllProducts(value)} />
            <FlatList

                numColumns={2}

                data={products}
                renderItem={({ item }) => <ProductCard item={item} />} />





        </View>
    );
};


//make this component available to the app
export default Productlist;
