import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { results, errorMessage, searchApi } = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((item) => item.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList title="£" results={filterResultsByPrice("£")} />
        <ResultsList title="££" results={filterResultsByPrice("££")} />
        <ResultsList title="£££" results={filterResultsByPrice("£££")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // wrapper: {
  //   flex: 1,
  // },
});

export default SearchScreen;
