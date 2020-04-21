import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import pokemon from "./pokemonStore";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
