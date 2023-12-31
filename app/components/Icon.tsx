import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

function Icon({name,size = 40,backgroundColor ="#000",iconColor ="#fff"}:{name:any,size?:number,backgroundColor?:string,iconColor?:string}) {
    return (
        <View style={{width:size,height:size,borderRadius:size/2,backgroundColor, alignItems:"center",justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size/2}/>
        </View>
    );
}

export default Icon;