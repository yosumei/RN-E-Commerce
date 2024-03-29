//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTLIST } from '../../utils/routes';

// create a component
const WidgetTitle = ({title,category}) => {

    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:"600",color:AppColors.BLACK }} >{title} </Text>
            <TouchableOpacity onPress={()=>navigation.navigate(PRODUCTLIST,{category:category,title:title})}>
                <Text style={{fontSize:16,color:AppColors.GRAY }}>See All</Text>
            </TouchableOpacity >
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:10
      
    },
});

//make this component available to the app
export default WidgetTitle;
