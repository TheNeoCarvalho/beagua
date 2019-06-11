import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Container, Texto, Lista, TextoLista, Btn } from "./styles";
export default class App extends Component {
   state = {
     data: [],
     repos:[]
   }
  async componentDidMount(){
    await fetch("https://api.github.com/users/theneocarvalho")
    .then(response => {
      return response.json();
    }).then(data => {
      this.setState({data})
    })
  }

  repos = () => {
    fetch("https://api.github.com/users/theneocarvalho/repos")
    .then(response => {
      return response.json();
    }).then(repos => {
      this.setState({repos})
    })
  }

  render() {
    return (
      <Container>
        
        <Image style={{ width: 150, height: 150 }} source={{ uri: this.state.data.avatar_url }} />
        <Texto>
        { JSON.stringify(this.state.data.login) }
        </Texto>        
        <Btn onPress={this.repos}>
          <Texto>Ver repositórios</Texto>
        </Btn>
        <Lista>
        { 
          this.state.repos.map( (repo, k) => <TextoLista key={`${k}`}>{repo.name} - { repo.stargazers_count}</TextoLista> ) 
        }
        </Lista>
      </Container>
      );
  }
}
