import React from 'react';
import { ImageBackground,StyleSheet, View,Image, Text } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

function WelcomeScreen({navigation}:Props) {
  return (
    <ImageBackground blurRadius={10} source={require("../assets/background.jpg")} style={styles.background}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>

      <AppButton title="Login"/>
      <AppButton title="Register" color='secondary'/>
      <AppButton title="Next" color='secondary' onPress={()=>navigation.navigate('Listings')}/>
      </View>
    </ImageBackground>

  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  buttonsContainer: {
    padding: 20,
    width:"100%"
  },
  logo: {
    width:100,
    height:100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems:'center'
  },
  tagline: {
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20,
    
  }
})

export default WelcomeScreen;
