import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Router, Switch, Route } from "./routing";
import Home from "./Home";
import Pokemon from "./Pokemon";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <View style={styles.container}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} setSelectedPokemon={setSelectedPokemon} />
            )}
          ></Route>
          <Route
            exact
            path="/pokemon"
            render={props => (
              <Pokemon {...props} selectedPokemon={selectedPokemon} />
            )}
          ></Route>
        </Switch>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    padding: 50
  }
});
