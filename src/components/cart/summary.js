//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../ui/button';
import { AppColors } from '../../theme/colors';

// create a component
const Summary = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:"space-between", marginVertical:10}}>
                <Text style={{color:AppColors.GRAY}}>Subtotal</Text>
                <Text style={{fontWeight:"700"}}>800</Text>

            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between", marginVertical:10}}>
                <Text style={{color:AppColors.GRAY}}>DeliveryFee</Text>
                <Text style={{fontWeight:"700"}}>800</Text>

            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between", marginVertical:10}}>
                <Text style={{color:AppColors.GRAY}}>Discount</Text>
                <Text style={{fontWeight:"700"}}>800</Text>

            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between", marginVertical:10}}>
                <Text style={{color:AppColors.GRAY}}>Total</Text>
                <Text style={{fontWeight:"700"}}>1600</Text>

            </View>
            <Button  title="Pay Now"/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      flex:1,
        padding:20,
        borderTopWidth:1,
        paddingHorizontal:1


       
    },
    button1:{
        borderRadius:300
    }
});

//make this component available to the app
export default Summary;
