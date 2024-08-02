import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}:DiceProps):JSX.Element=>{
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

export default function App(): JSX.Element {

  const [imageSource, setImageSource] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = ()=>{
    const randomNumber = Math.floor(Math.random()*6) + 1;

    switch(randomNumber){
      case 1: 
        setImageSource(DiceOne);
        break;

      case 2:
        setImageSource(DiceTwo);
        break;
      
      case 3:
        setImageSource(DiceThree);
        break;

      case 4:
        setImageSource(DiceFour);
        break;

      case 5:
        setImageSource(DiceFive);
        break;

      case 6:
        setImageSource(DiceSix);
        break;
      
      default: 
        setImageSource(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={imageSource}/>
      <Pressable
        onPress={rollDiceOnTap}
      >
        <Text style={styles.rollButtonText}>Roll The Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage: {
    height: 200,
    width: 200
  },
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  rollButtonText: {
    color: '#000000',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    fontWeight: '600',
    borderColor: 'blue',
    borderRadius: 10,
    marginTop: 20
  }
})