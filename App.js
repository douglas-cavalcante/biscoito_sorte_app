import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MyButton from "./components/MyButton";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cookieText: ''
    }
    this.phrases = [
      'A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua. ',
      'Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos. ',
      'O amigo ama em todos os momentos; é um irmão na adversidade. ',
      'Instrua a criança segundo os objetivos que você tem para ela, e mesmo com o passar dos anos não se desviará deles. '
    ];
  }

  break = () => {
    let i = Math.floor(Math.random() * this.phrases.length);
    cookieText = this.phrases[i];
    this.setState({ cookieText })
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./biscoito.png')} style={{ marginBottom: 40 }} />
        <Text style={styles.cookieText}>"{this.state.cookieText}"</Text>
        <MyButton color="#B59619" bgColor="white" text="Quebrar Biscoito" onPress={this.break} />
        <Text style={{ marginTop: 100 }}>Versão 1.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFDB58',
    padding: 20,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cookieText: {
    fontSize: 20,
    color: 'black',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})
