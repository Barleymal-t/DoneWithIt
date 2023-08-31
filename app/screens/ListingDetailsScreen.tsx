import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppButton from "../components/AppButton";

type Props = NativeStackScreenProps<RootStackParamList, 'ListingDetails'>;


function ListingDetailsScreen({navigation}:Props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="5 listings"
        onPress={()=> console.log("Listing clicked")}
        
        />
        </View>
      </View>
      <AppButton title="Next" color='secondary' onPress={()=>navigation.navigate('ListingEdit')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding:20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color:colors.secondary,
    fontWeight:"bold",
    fontSize:20,
    marginVertical:10
  },
  title:{
    fontSize:24,
    fontWeight:"500"
  },
  userContainer: {
    marginVertical:40
  }
});

export default ListingDetailsScreen;
