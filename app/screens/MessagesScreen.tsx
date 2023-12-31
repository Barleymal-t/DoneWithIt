import React, {useState} from "react";
import { FlatList, Platform, StyleSheet, StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppButton from "../components/AppButton";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Messages'>;



function MessagesScreen({navigation}:Props) {
  const [messages,setMessages] = useState(initialMessages)
  const [refreshing,setRefreshing] = useState(false)

   const handleDelete = (message:typeof initialMessages[0]) => {
    // delete message from message array
    setMessages(messages.filter(m=> m.id!==message.id))

    // call the server to delete message from database
   }
  return (
    <Screen>
        
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={()=><ListItemDeleteAction onPress={() => handleDelete(item)}/>}
            />
            
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing = {refreshing}
        onRefresh={()=> {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }}
        />
              <AppButton title="Next" color='secondary' onPress={()=>navigation.navigate('Account')}/>

    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
