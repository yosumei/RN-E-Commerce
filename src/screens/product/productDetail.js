//import liraries
import React, { useEffect, useState,useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { screenStyle } from '../../style/screenStyle';
import { height, width } from '../../utils/constants';
import { AppColors } from '../../theme/colors';
import Button from '../../components/ui/button';
import Counter from '../../components/ui/counter';
import { getRequest } from '../../service/verbs';
import { PRODUCTS_URL } from '../../service/urls';
import Spinner from '../../components/ui/spinner';
import { Heart } from 'iconsax-react-native';
import StoreContext from '../../context';

// create a component
const ProductDetail = ({ route }) => {
    const [product, setProduct] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const {addCart}=useContext(StoreContext)


    const { item } = route?.params

    const getAllProductDetail = () => {
        setLoading(true)
        getRequest(PRODUCTS_URL + `/${item.id}`)
            .then((response) => {
                setProduct(response.data)

            })
            .catch((error) => {

            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getAllProductDetail()
    })
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={screenStyle.container}>
                <ScrollView>
                    <View >
                        <Image
                        source={{
                            uri:item.image,
                        }}
                        style={{
                            width:width,
                            height:width*0.9,
                            resizeMode:"contain"
                        }} />
                        <View style={{flexDirection:"row"}} >
                            <View style={{flex:3}} >
                        <Text numberOfLines={2} style={{fontWeight:"700"}} >{product?.title} </Text>
                        <Text numberOfLines={2} style={{fontWeight:"400"}} >{product?.category} </Text>
                        <Text numberOfLines={2} style={{fontWeight:"700"}} >₺{product?.price} </Text>

                            </View>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
                                <TouchableOpacity>
                                    <Heart size={25} color={AppColors.RED}  />
                                </TouchableOpacity>

                                </View>
                        </View>
                        <View>
                        <Text numberOfLines={2} style={{fontWeight:"400"}} >{product?.description} </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>



            <View style={{
                position: "absolute",
                bottom: 0,
                padding: 20,
                height: height * 0.15,
                backgroundColor: AppColors.WHITE,
                width: width,
                flexDirection: "row"
            }}>

                <View style={{ flex: 1, justifyContent: "center" }} >
                    <Counter />

                </View>

                <View style={{ flex: 2, justifyContent: "center" }} >

                    <Button  title={"Add To Basket"}   onPress={()=>addCart(item) } />


                </View>



            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProductDetail;
