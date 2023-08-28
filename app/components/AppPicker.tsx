import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TextInputProps,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import colors from "../config/colors";
import PickerItem from "./PickerItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type Category = {
  label: string;
  value: number;
};

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}: {
  icon?: any,
  items: Category[],
  onSelectItem:(item:Category)=>any,
  selectedItem:Category,
  placeholder: string,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <GestureHandlerRootView>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </GestureHandlerRootView>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
