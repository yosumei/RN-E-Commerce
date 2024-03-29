//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image, TouchableOpacity,Pressable} from 'react-native';
import { width } from '../../utils/constants';
import { Heart } from 'iconsax-react-native';
import { AppColors } from '../../theme/colors';
import { PRODUCTDETAIL } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

// create a component
const WidgetProductCard = ({item}) => {
    const navigation =useNavigation()

    return (
        <Pressable onPress={()=>navigation.navigate(PRODUCTDETAIL,{item:item})}
        style={styles.container}>
            <Image
            source={ {
                uri:item.image,
            }}
            style={{
                width:width*0.4,
                height:width*0.3,
                resizeMode:"contain",
            }} />
            <Text
            numberOfLines={3}>{item.title} </Text>

            <View style={{flexDirection:"row"}} >
            <View>
            <Text>{item.category} </Text>
            <Text>₺{item.price} </Text>

            </View>
            <View>
                <TouchableOpacity>
                    <Heart size={20} color={AppColors.RED} />
                </TouchableOpacity>
            </View>
            </View>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      width:width*0.4,
      margin:5
    },
});

//make this component available to the app
export default WidgetProductCard;
