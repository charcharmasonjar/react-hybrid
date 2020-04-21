import React from "react";
import { View, Text, FlatList } from "react-native";
import pokemon from "./pokemonStore";

export default function Home(props) {
  return (
    <View>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
