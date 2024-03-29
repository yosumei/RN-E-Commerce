//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import widgets from '../../widgets';
import { screenStyle } from '../../style/screenStyle';

// create a component
const Home = () => {
    const renderItem=({item})=>{
        return (
            <View>
                {item.isShow && item.component}
            </View>
        )
    }
    return (
        <View style={screenStyle.container}>
            <FlatList
                data={widgets}
                renderItem={renderItem} />
        </View>
    );
};


//make this component available to the app
export default Home;
