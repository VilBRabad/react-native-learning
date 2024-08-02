import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LocationInfo() {

    const locationData = [
        {

            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
            title: "Taj Mahal",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, similique."
        },
        {

            url: "https://www.holidify.com/images/attr_square/1727.jpg",
            title: "Tower",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, similique."
        },
        {

            url: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/20202710/10-famous-historical-places-in-India.jpg",
            title: "Laal Palace",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, similique."
        },
        {

            url: "https://www.tourism-of-india.com/blog/wp-content/uploads/2018/07/hampi-karnataka.jpg",
            title: "Ancent Mahal",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, similique."
        }
    ]

    return (
        <View style={{padding: 20}}>
            <Text style={styles.headText}>Location Info</Text>
            <ScrollView horizontal={true}>
                {
                    locationData.map((item, ind) => (
                        <View key={ind} style={styles.card}>
                            <Image style={styles.cardImage} source={{
                                uri: item.url
                            }} />
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardHead}>{item.title}</Text>
                                <Text style={styles.info}>{item.description}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        color: "white"
    },
    card: {
        backgroundColor: "grey",
        borderRadius: 10,
        marginTop: 10,
        marginRight: 10,
        width: 360
    },
    cardImage: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 200
    },
    cardInfo: {
        height: 'auto',
        padding: 10,
        width: "100%"
    },
    cardHead: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    info: {
    }
})