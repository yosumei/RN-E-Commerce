import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { FAVORITES, HOME, PROFILE ,CATEGORIES} from '../utils/routes';
import Categories from '../screens/categories';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import { AppColors } from '../theme/colors';
import { Home2, ShoppingCart } from 'iconsax-react-native';
import TabIcon from '../components/router/tabIcon';
import { TouchableOpacity } from 'react-native';
import HeaderTabRight from '../components/router/headerTabRight';



const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (

      <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon:({focused,color,size})=>(
            <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
            />
        ),
        headerRight:({focused,color,size})=>(
         <HeaderTabRight/>
          ),


        tabBarActiveTintColor:AppColors.PRIMARY,
        tabBarInactiveTintColor:AppColors.GRAY
      })}
    >
      
        



        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen name={CATEGORIES} component={Categories} />
        <Tab.Screen name={FAVORITES} component={Favorites} />
        <Tab.Screen name={PROFILE} component={Profile} />
      </Tab.Navigator>

  );
}