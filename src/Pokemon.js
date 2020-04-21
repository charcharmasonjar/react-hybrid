import React from "react";
import { View, Text, Image } from "react-native";
import pokemon from "./pokemonStore";

export default function Pokemon(props) {
  const examplePokemon = pokemon[0];
  return (
    <View>
      <View>
        <View>
          <Text>{`#${examplePokemon.number}`}</Text>
        </View>
        <View>
          <Text>{`Name: ${examplePokemon.name}`}</Text>
        </View>
        <View>
          <Text>{`Type: ${examplePokemon.type}`}</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: examplePokemon.photoUrl }}
          />
        </View>
      </View>
    </View>
  );
}
