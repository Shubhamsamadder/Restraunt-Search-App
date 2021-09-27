import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    console.log("Search API called succesfully");
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term, // es2015 syntax :--- term
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi();
          //  console.log("Search API called succesfully");
        }}
      />
      <Text>The no. of records that are fetched {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
