import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
  return (
    <View style={{padding: 20}} >
      <Text style={styles.headText}>Scroll Cards</Text>
      <ScrollView horizontal={true} style={styles.cards}>
        <View style={[styles.card, {backgroundColor:"gray"}]}>
            <Text>First</Text>
        </View>
        <View style={[styles.card, {backgroundColor:"gray"}]}>
            <Text>Second</Text>
        </View>
        <View style={[styles.card, {backgroundColor:"gray"}]}>
            <Text>Third</Text>
        </View>
        <View style={[styles.card, {backgroundColor:"gray"}]}>
            <Text>Fifth</Text>
        </View>
        <View style={[styles.card, {backgroundColor:"gray"}]}>
            <Text>Sixth</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        color: "white"
    },
    cards: {
        flex: 1,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 110,
        minWidth: 110,
        margin: 10,
    },
})