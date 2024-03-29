//import liraries
import { AddCircle, MinusCirlce } from 'iconsax-react-native';
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { AppColors } from '../../theme/colors';

// create a component
const Counter = () => {
    const [count,setCount]=useState(0)

    const decrease =()=>{
        if(count>0)
        setCount(count-1)
    }

    const increase =()=>{
      
        setCount(count+1)
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={decrease}>

                <MinusCirlce size={35} variant="Outline" color={AppColors.BLACK} />
            </TouchableOpacity>
            <Text style={{fontSize:18,marginHorizontal:5}}>{count}</Text>
            <TouchableOpacity
               onPress={increase}>

                <AddCircle size={35} variant="Bold" color={AppColors.BLACK} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"row",
        backgroundColor:AppColors.SOFTGRAY,
        padding:5,
        borderRadius:100
    },
});

//make this component available to the app
export default Counter;
