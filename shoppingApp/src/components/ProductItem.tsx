import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import tw from "twrnc";

type ProductItemProps = PropsWithChildren<{
    product: Product
}>

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <View style={tw`flex-row my-5 mx-2`}>
      <Image
        source={{uri: product.imageUrl}}
        style={styles.image}
      />
      <View style={tw`ml-6 justify-center gap-1`}>
        <Text style={tw`text-black`}>{product.name}</Text>
        <View style={tw`flex-row gap-1 items-center`}>
            <Text style={tw`text-green-700 text-[1rem]`}>★★★★</Text>
            <Text style={tw`text-black`}>{product.rating}</Text>
            <Text style={tw`text-black/50`}>({product.ratingCount.toLocaleString()})</Text>
        </View>
        <View style={tw`flex-row gap-1 items-center`}>
            <Text style={tw`text-green-600 text-[1.2rem] font-bold`}>{product.offerPercentage}%</Text>
            <Text style={tw`text-black/50 text-[1.1rem] font-semibold line-through`}>₹ {product.originalPrice.toLocaleString()}</Text>
            <Text style={tw`text-black text-[1.1rem] font-semibold ml-1`}>₹ {product.discountPrice.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 90,
        resizeMode: 'contain'
    }
})


export default ProductItem