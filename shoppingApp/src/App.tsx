import {Text,View } from 'react-native'
import React from 'react'
import tw from "twrnc";

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Products: undefined;
  Details: {product: Product};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Products'>
        <Stack.Screen name='Products' component={Home} options={{title: "Trending Products"}}/>
        <Stack.Screen name='Details' component={Details} options={{title: "Product details"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App