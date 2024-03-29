//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoreContext from '.';

// create a component
const Provider = ({children}) => {
    const [cart,setCart]=useState([])
    const addCart=(product)=>{
        setCart([...cart,product])


    }
    return (
        <StoreContext.Provider value={{cart,addCart}}>
            {children}
        </StoreContext.Provider>
    );
};


//make this component available to the app
export default Provider;
