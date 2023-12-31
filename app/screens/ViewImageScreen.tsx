import React from 'react';
import { Image,StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppButton from '../components/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Image'>;


function ViewImageScreen({navigation}:Props) {
  return ( 
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color={colors.white} size={35}/>
      </View>
      <View style={styles.deleteIcon}>

        <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={35}/>
      </View>
<Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")}/>
<AppButton title="Register" color='secondary' onPress={()=>navigation.navigate('Account')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    // width:50,
    // height:50,
    // backgroundColor: colors.primary,
    position:'absolute',
    top:40,
    left:30
  },
  deleteIcon: {
    // width:50,
    // height:50,
    // backgroundColor:colors.secondary,
    position:'absolute',
    top:40,
    right:30
  },
  container: {
    backgroundColor: colors.black,
    flex:1
  },
  image: {
    width:"100%",
    height:"100%"
  }
})

export default ViewImageScreen;
