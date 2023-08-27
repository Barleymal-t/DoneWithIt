import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
  Platform,
  StatusBar,
  View,
  Dimensions,
  Switch
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useDeviceOrientation } from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  // console.log(useDeviceOrientation());
  const devOri = useDeviceOrientation();
  const dimensionStyle = { height: devOri === "landscape" ? "100%" : "30%" };
  const handlePress = () => {
    console.log("Text Pressed");
  };

  // console.log(require("./assets/icon.png"));
  // console.log(Dimensions.get("window"));

  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <AppPicker placeholder="Category"/>
      <AppTextInput placeholder="Email"/>
    </Screen>
    // <AccountScreen/>
    // <Screen>
      // <ListItem title="My Title" subTitle="My Subtitle" ImageComponent={<Icon name="email"/>}/>
      //  <Icon name="email" size={50} backgroundColor="red" iconColor="white"/> 
    // </Screen>
    // <MessagesScreen/>
    // <ListingDetailsScreen/>
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // </View>
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <MaterialCommunityIcons name="email" size={60} color="darkcyan"/>
    //   <AppText>I love react native!</AppText>
    //   <AppButton title="I used to be a button" onPress={()=>console.log("Button pressed")}/>
    // </View>
    //  style={{ fontSize: 30,fontStyle:"italic",fontWeight:"600",color:"tomato", textAlign:"center", lineHeight:50 }}
    // <WelcomeScreen/>
    // <ViewImageScreen/>
    // <View style={{
    //   backgroundColor:'dodgerblue',
    //   flex:1
    // }}></View>
    // <Screen style={styles.container}>
    //   <View style={{width: devOri==="landscape"?"100%":"50%",backgroundColor:"#fff",flex:0.9,flexDirection:"column", justifyContent:"space-between" }}>

    //   <View style={{backgroundColor:"dodgerblue",flex:1}} />
    //   <View style={{backgroundColor:"gold",flex:1}} />
    //   <View style={{backgroundColor:"tomato",flex:1}} />
    //   </View>
    //   {/* <Text numberOfLines={1} onPress={handlePress}>
    //     So many hours wasted So much text written so much disapointment
    //   </Text>
    //   <TouchableNativeFeedback onPress={()=>console.log("Image Tapped")}>
    //     <Image
    //       style={styles.imageContainer}
    //       source={require("./assets/icon.png")}
    //     />
    //   </TouchableNativeFeedback > */}
    //   {/* <Image
    //     source={{
    //       width: 200,
    //       height: 300,
    //       uri: "https://picsum.photos/200/200",
    //     }}
    //   /> */}
    //   <Button
    //     color="orange"
    //     title="Click me"
    //     onPress={
    //       () => Alert.prompt("My title", "My message", (text) => console.log(text))
    //       // Alert.alert("My title", "My message", [
    //       //   { text: "Yes", onPress: () => console.log("Yes") },
    //       //   { text: "No", onPress: () => console.log("No") },
    //       // ])
    //     }
    //   />
    //   {/* <StatusBar style="auto" /> */}
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  view: {
    backgroundColor: "dodgerBlue",
    width: "50%",
  },
});
