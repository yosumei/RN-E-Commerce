//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../theme/colors';

// create a component
const Badge = ({count}) => {
    return (
        <View style={{ backgroundColor: AppColors.PRIMARY, justifyContent: "center", alignItems: "center",
                width:22,
                height:22,
                borderRadius:100,
                position:"absolute",
                zIndex:99,
                right:-10,
                top:-10
            
            }}>
                    <Text style={{color:AppColors.WHITE,fontSize:12,fontWeight:"500"}}>{count} </Text>
                </View>
    );
};



//make this component available to the app
export default Badge;
