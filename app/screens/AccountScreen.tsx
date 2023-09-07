import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppButton from "../components/AppButton";

const manyItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Account'>;


function AccountScreen({navigation}:Props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Barleymalt"
          subTitle="niiodartey10@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList data={manyItems} keyExtractor={menuItem=>menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item})=><ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}/>} />
      </View>
      <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>} />
      <AppButton title="Next" color='secondary' onPress={()=>navigation.navigate('Auth')}/>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor:colors.light
  }
});

export default AccountScreen;
