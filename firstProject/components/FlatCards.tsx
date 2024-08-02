import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View style={{padding: 20}}>
            <Text style={styles.headText}>Flat Cards</Text>
            <View style={styles.cards}>
                <View style={[styles.card, { backgroundColor: "red" }]}><Text style={{color:"white"}}>Red</Text></View>
                <View style={[styles.card, { backgroundColor: "green" }]}><Text style={{color:"white"}}>Green</Text></View>
                <View style={[styles.card, { backgroundColor: "blue" }]}><Text style={{color:"white"}}>Blue</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        color: 'white'
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
        marginTop: 15
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 110,
        maxWidth: 110,
        borderRadius: 10
    },
    box1: {}
})