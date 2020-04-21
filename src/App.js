import React, {useState } from "react";
import { StyleSheet, View } from "react-native";
import { Router, Switch, Route } from "./routing";
import Home from "./Home";
import Pokemon from "./Pokemon";

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
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
