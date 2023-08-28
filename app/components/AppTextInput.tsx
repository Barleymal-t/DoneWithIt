import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TextInputProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

export interface AppTextInputProps extends TextInputProps {
  icon?:any
}

function AppTextInput({ icon, ...otherProps }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput placeholderTextColor={colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems:"center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
