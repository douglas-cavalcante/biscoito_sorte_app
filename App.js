import React, { Component } from 'react';
import { StyleSheet, View, Image , Text} from 'react-native';
import Botao from "./Botao";



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.frases = [
      'A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua. ',
      'Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos. ',
      'O amigo ama em todos os momentos; é um irmão na adversidade. ',
      'Instrua a criança segundo os objetivos que você tem para ela, e mesmo com o passar dos anos não se desviará deles. '
    ];
  }
  quebrarBiscoito = () => {
    let s = this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    biscuit = this.frases[r];
    this.setState({ text: biscuit })
  }
  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./biscoito.png')} />
        <Text style={styles.text}>"{this.state.text}"</Text>
        <Botao color="#B59619" bgColor="white" text="Quebrar Biscoito" onPress={this.quebrarBiscoito} />
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
  text: {
    fontSize: 17,
    color: 'white',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})
