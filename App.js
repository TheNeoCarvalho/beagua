import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Container, Background } from "./styles";
export default class App extends Component {
  render() {
    return (
      <Container>
        <Background source={require("./src/img/bg.png")}>
          <Text style={styles.welcome}>Bebágua</Text>
          <View style={styles.box}>
            <Text style={styles.info}>2000ml</Text>
            <Text style={styles.info}>1800ml</Text>
            <Text style={styles.info}>BOM</Text>
          </View>
          <Text style={styles.perc}>90%</Text>
          <TouchableOpacity style={styles.btn}>
            <Text>Beber água</Text>
          </TouchableOpacity>
        </Background>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 55,
    textAlign: "center",
    margin: 10
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    fontSize: 22,
    flex: 1,
    textAlign: "center",
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
    height: 50,
    margin: 10
  },
  perc: {
    fontSize: 90,
    color: "#fff",
    fontWeight: "bold"
  },
  btn: {
    flexDirection: "row",
    width: 150,
    height: 50,
    backgroundColor: "#069",
    borderWidth: 2,
    borderColor: "#fff"
  }
});
