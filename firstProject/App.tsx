import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from "react-native";
import FlatCards from "./components/FlatCards";
import ScrollCards from "./components/ScrollCards";
import LocationInfo from "./components/LocationInfo";
import Contact from "./components/Contact";

function App(): JSX.Element{
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollCards />
        <LocationInfo/>
        <Contact/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;