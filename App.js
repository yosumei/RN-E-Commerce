import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/router/rootNavigator';
import Provider from './src/context/provider';


export default function App() {
  return (
    <Provider>


    <NavigationContainer>
     <RootNavigator/>
    </NavigationContainer>
    </Provider>

  );
}