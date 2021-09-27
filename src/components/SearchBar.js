import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => {
          onTermChange(newTerm);
        }}
        onEndEditing={() => {
          onTermSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 5,
  },
  inputStyle: {
    marginLeft: 4,
    flex: 1,
    marginHorizontal: 5,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginRight: 15,
    marginLeft: 10,
  },
});

export default SearchBar;
