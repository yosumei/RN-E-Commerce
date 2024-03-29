//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';
import { getRequest } from '../../service/verbs';
import { CATEGORİES_URL } from '../../service/urls';

// create a component
const CategorySelect = ({onSelect}) => {
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
    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=> selectCategory (item)}
            style={category==item?styles.activeCategory:styles.inactiveCategory}> 
                <Text style={{fontWeight:300}}>
{item}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList horizontal
            data={categories}
            renderItem={renderItem} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
     marginVertical:15,
    },
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
export default CategorySelect;
