//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet ,Image, TouchableOpacity,Pressable} from 'react-native';
import { width } from '../../utils/constants';
import { Heart } from 'iconsax-react-native';
import { AppColors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';
import Button from '../ui/button';
import StoreContext from '../../context';


// create a component
const ProductCard = ({item}) => {
    const navigation =useNavigation();
    const {addCart}=useContext(StoreContext)

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
            <Text style={{
                fontWeight:"700",
                marginVertical:5,
                fontSize:14,
                color:AppColors.BLACK,
            }}
            numberOfLines={3}
        >{item.title} </Text>

            <View style={{flexDirection:"row"}} >
            <View>
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
            <View>
                <TouchableOpacity>
                    <Heart size={20} color={AppColors.RED} />
                </TouchableOpacity>
            </View> 
            </View>
            <View>
                <Button title="Add To Basket" onPress={()=>addCart(item)} />
            </View>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      width:width/2,
      margin:5,
      flex:1
    },
});

//make this component available to the app
export default ProductCard;
