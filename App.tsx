// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
  Dimensions
} from "react-native";

import {useDeviceOrientation} from "@react-native-community/hooks"
import React from "react";
import WelcomeScreen from "./app/WelcomeScreen"
import ViewImageScreen from "./app/ViewImageScreen";

export default function App() {
  console.log(useDeviceOrientation())
  const devOri =useDeviceOrientation()
  const dimensionStyle = {height: devOri==="landscape"?"100%":"30%"}
  const handlePress = () => {
    console.log("Text Pressed");
  };

  // console.log(require("./assets/icon.png"));
  console.log(Dimensions.get("window"))


  return (
    <WelcomeScreen/>
    // <ViewImageScreen/>
    // <View style={{
    //   backgroundColor:'dodgerblue',
    //   flex:1
    // }}></View>
    // <SafeAreaView style={styles.container}>
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
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems:"center",
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  view: {
    backgroundColor:"dodgerBlue",
    width:"50%",
    
  }
});
