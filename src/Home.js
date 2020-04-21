import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import pokemon from "./pokemonStore";

export default function Home(props) {
  const handlePress = (pokemon) => {
    props.setSelectedPokemon(pokemon);
    props.history.push('/pokemon')
  }
  return (
    <View>
      <FlatList
        keyExtractor={pokemon => pokemon.number}
        data={pokemon}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>handlePress(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
