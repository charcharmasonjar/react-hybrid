import React from "react";
import { View, Text, Flatlist } from "react-native";
import pokemon from "./pokemonStore";

export default function Home(props) {
  return (
    <View>
      <Flatlist
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
