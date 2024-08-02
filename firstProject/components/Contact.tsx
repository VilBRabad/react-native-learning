import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contact() {
  return (
    <View style={{marginTop: 30, backgroundColor: "#021526", padding: 20}}>
      <Text style={styles.headText}>Contact</Text>
      <View style={{marginTop: 5, marginBottom: 30}}>
        <View style={styles.contactCard}>
            <Image style={styles.img} source={{
                uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            }}/>
            <View style={{width: '70%'}}>
                <Text style={{fontSize: 17, color: "white"}}>Pravin Gorwala</Text>
                <Text numberOfLines={1} ellipsizeMode='tail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, deleniti.</Text>
            </View>
        </View>
        <View style={styles.contactCard}>
            <Image style={styles.img} source={{
                uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            }}/>
            <View style={{width: '70%'}}>
                <Text style={{fontSize: 17, color: "white"}}>Rupesh Gimbhal</Text>
                <Text numberOfLines={1} ellipsizeMode='tail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, deleniti.</Text>
            </View>
        </View>
        <View style={styles.contactCard}>
            <Image style={styles.img} source={{
                uri: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            }}/>
            <View style={{width: '70%'}}>
                <Text style={{fontSize: 17, color: "white"}}>Vilas Rabad</Text>
                <Text numberOfLines={1} ellipsizeMode='tail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, deleniti.</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 20,
        color: "white"
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 100
    },
    contactCard: {
        flex: 1,
        flexDirection: "row",
        gap: 15,
        marginTop: 15,
        alignItems: "center"
    },
})