//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';
import { height } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTLIST } from '../../utils/routes';

// create a component
const CategoryCard = ({item}) => {
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(PRODUCTLIST,{category:item,title:item})} style={styles.container}>
            <Text style={{fontSize:24,fontWeight:"600",textTransform:"capitalize"}}>{item} </Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.SOFTGRAY,
        padding:10,
        minHeight:height/8,
        justifyContent:"center",
        marginVertical:5
    },
});

//make this component available to the app
export default CategoryCard;
