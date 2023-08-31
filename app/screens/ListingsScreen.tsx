import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale.",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Listings'>;

function ListingsScreen({navigation}:Props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
            <AppButton title="Next" color='secondary' onPress={()=>navigation.navigate('ListingDetails')}/>

    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:20,
    backgroundColor:colors.light
  },
});

export default ListingsScreen;
