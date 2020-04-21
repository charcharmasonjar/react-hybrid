import React from "react";
import { View, Text, Image } from "react-native";
import { Link } from "./routing";

export default function Pokemon(props) {
  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );
  if (!props.selectedPokemon) {
    return (
      <View>
        <Text>No pokeeeemon selected</Text>
        {backButton}
      </View>
    );
  }
  return (
    <View>
      <View>
        <View>
          <Text>{`#${props.selectedPokemon.number}`}</Text>
        </View>
        <View>
          <Text>{`Name: ${props.selectedPokemon.name}`}</Text>
        </View>
        <View>
          <Text>{`Type: ${props.selectedPokemon.type}`}</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: props.selectedPokemon.photoUrl }}
          />
        </View>
        {backButton}
      </View>
    </View>
  );
}
