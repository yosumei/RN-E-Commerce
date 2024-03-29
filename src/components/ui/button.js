//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';


// create a component
const Button = props=> {
    const {title}=props
    return (
        <TouchableOpacity  {...props}
         style={styles.container}>
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.PRIMARY,
        borderRadius:5,
        margin:10,
        paddingVertical:10

    },
    title:{
        fontSize:16,
        fontWeight:"500",
        color:AppColors.WHITE,
    }
});

//make this component available to the app
export default Button;
