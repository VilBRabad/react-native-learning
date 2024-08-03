import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import tw from "twrnc";

import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import {PRODUCTS_LIST} from "../data/constants";
import ProductItem from '../components/ProductItem';
import Seprator from '../components/Seprator';

type HomeProps = NativeStackScreenProps<RootStackParamList, "Products">

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={tw`flex-1 px-2`}>
      <FlatList 
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seprator}
        renderItem={({item})=>(
          <Pressable onPress={()=>navigation.navigate("Details", {product: item})}>
            <ProductItem product={item}/>
          </Pressable>
        )}
      />
    </View>
  )
}

export default Home