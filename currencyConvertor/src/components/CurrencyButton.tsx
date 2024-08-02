import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CurrencyButtonProps= PropsWithChildren<{
  name: string;
  flag: string;
}>

export default function CurrencyButton(props: CurrencyButtonProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  flag: {
    fontSize: 28,
    color: "#FFFFFF",
    marginBottom: 4
  },
  country: {
    fontSize: 14,
    color: "#2d3436",
  }
})