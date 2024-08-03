import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import tw from "twrnc";
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">

const Details = ({route}: DetailsProps) => {

  const {product} = route.params;

  return (
    <View style={tw`flex-1 p-2`}>
      <Image
        source={{uri: product.imageUrl}}
        height={500}
        width={400}
        style={{resizeMode: "contain"}}
      />
      <View style={tw`mt-8 gap-1 px-2`}>
        <Text style={tw`text-black text-[1rem]`}>{product.name}</Text>
        <View style={tw`flex-row gap-1 items-center`}>
            <Text style={tw`text-green-700 text-[1.1rem]`}>★★★★</Text>
            <Text style={tw`text-black`}>{product.rating}</Text>
            <Text style={tw`text-black/50`}>({product.ratingCount.toLocaleString()})</Text>
        </View>
        <View style={tw`flex-row gap-2 items-center`}>
            <Text style={tw`text-green-600 text-[1.2rem] font-bold`}>{product.offerPercentage}%</Text>
            <Text style={tw`text-black/50 text-[1.1rem] font-semibold line-through`}>₹ {product.originalPrice.toLocaleString()}</Text>
            <Text style={tw`text-black text-[1.1rem] font-semibold ml-2`}>₹ {product.discountPrice.toLocaleString()}</Text>
        </View>
        <View style={tw``}>
          <FlatList 
            data={product.tags}
            keyExtractor={item=>item}
            renderItem={({item})=>(
              <View style={tw`items-start`}>
                <Text style={tw`text-black border p-2 my-1 rounded-md`}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}

export default Details