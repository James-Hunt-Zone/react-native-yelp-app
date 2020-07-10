import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.wrapper}>
      <Feather style={styles.icon} name="search" color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#dedede",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  icon: {
    marginHorizontal: 15,
    fontSize: 30,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
