//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchNormal, ShoppingCart } from 'iconsax-react-native';
import { AppColors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { CARD } from '../../utils/routes';
import App from '../../../App';
import Badge from '../cart/badge';
import StoreContext from '../../context';


// create a component
const HeaderTabRight = () => {
    const navigation = useNavigation();
    const { cart } = useContext(StoreContext)
    


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}>
                <SearchNormal
                    size="32" color={AppColors.BLACK}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(CARD)}
                style={styles.button}>
               {cart.length > 0 && <Badge count={cart.length}/>}
                <ShoppingCart
                    size="32" color={AppColors.BLACK}
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 10,
    },
    button: {
        marginHorizontal: 5,
    }
});

//make this component available to the app
export default HeaderTabRight;
