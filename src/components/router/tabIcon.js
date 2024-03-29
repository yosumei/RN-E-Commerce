//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../theme/colors';
import { CATEGORIES, FAVORITES, HOME, PROFILE } from '../../utils/routes';
import { Home2,Category, NotificationFavorite, Profile } from 'iconsax-react-native';

// create a component
const TabIcon = ({name}) => {
   if (name==HOME) 
   {return <Home2 size="32" color="#FF8A65"/>}
  else if (name==CATEGORIES) 
   {return <Category size="32" color="#FF8A65"/>}
 else if (name==FAVORITES) 
   {return <NotificationFavorite size="32" color="#FF8A65"/>}
  else if (name==PROFILE) 
   {return <Profile size="32" color="#FF8A65"/>}
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.WHITE,
    },
});

//make this component available to the app
export default TabIcon;
