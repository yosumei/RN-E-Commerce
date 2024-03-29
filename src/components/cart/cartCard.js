//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { width } from '../../utils/constants';
import { AppColors } from '../../theme/colors';
import Counter from '../ui/counter';

// create a component
const CartCard = ({item}) => {
    return (
        <View style={styles.container}>
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Image
            source={ {
                uri:item.image,
            }}
            style={{
                width:width*0.2,
                height:width*0.2,
                resizeMode:"contain",
                alignSelf:"center"
            }} />

</View>
<View style={{flex:3}}>
<Text style={{
                fontWeight:"700",
                marginVertical:5,
                fontSize:14,
                color:AppColors.BLACK,
            }}
            numberOfLines={3}
        >{item.title} </Text>
           <Text style={{
                marginVertical:5,
                fontSize:14,
                color:AppColors.GRAY
            }}>{item.category} </Text>
              <Text style={{
                fontWeight:"700",
                marginVertical:5,
                fontSize:14,
                color:AppColors.BLACK
            }}>₺{item.price} </Text>

    
</View>
<View style={{justifyContent:"center",alignItems:"center"}}>
<Counter />
    
</View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row"
    },
});

//make this component available to the app
export default CartCard;
