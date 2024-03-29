// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from '../screens/card';
import { CARD, PRODUCTDETAIL, PRODUCTLIST, TAB } from '../utils/routes';
import TabNavigator from './tabNavigator';
import { AppColors } from '../theme/colors';
import Productlist from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';


const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (

      <Stack.Navigator
      screenOptions={{headerBackTitleVisible:true,
      headerBackTitle:"Geri",headerTintColor:AppColors.BLACK,
      }}>
        <Stack.Screen options={{
            headerShown:false,
        }}
        name={TAB} component={TabNavigator} />

        <Stack.Screen name={CARD} component={Card} />
        <Stack.Screen
          options={({ route, navigation }) => ({
            
            headerRight:({focused,color,size})=>
             <HeaderTabRight/>
              ,title:route?.params?.title
          })} name={PRODUCTLIST} component={Productlist} />
        <Stack.Screen 
          options={({ route, navigation }) => ({
            
            headerRight:({focused,color,size})=>
             <HeaderTabRight/>
              ,
          })}
        name={PRODUCTDETAIL} component={ProductDetail} />
      </Stack.Navigator>
  );
}

export default RootNavigator;