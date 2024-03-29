//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';
import { getRequest } from '../../service/verbs';
import { CATEGORİES_URL } from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCard';
import { screenStyle } from '../../style/screenStyle';

// create a component
const Categories = () => {
    const [categories,setCategories]=useState([
        
    ]);
    const [category,setCategory]=useState();

    const getCategories =()=>
{
    getRequest(CATEGORİES_URL).then(response=>{
        setCategories(response.data)

    })
    .catch(error=>{
        console.log(error);
    });

};
const selectCategory =category=>
{
    setCategory(category);
    onSelect(category );

};
useEffect(()=>{
    getCategories()
},[])
   
    return (
        <View style={screenStyle.container}>
            <FlatList 
            data={categories}
            renderItem={({item})=>  <CategoryCard item={item} />} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   
    activeCategory:{
        padding:12,backgroundColor:AppColors.PRIMARY,marginRight:8,
        borderRadius:100,

    },
    inactiveCategory:{
        padding:12,backgroundColor:AppColors.GRAY,
        marginRight:8,
        borderRadius:100,
        
    }
});

//make this component available to the app
export default Categories;
