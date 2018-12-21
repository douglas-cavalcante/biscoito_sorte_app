import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Botao extends React.Component {

  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: this.props.color,
        backgroundColor: this.props.bgColor,
        borderRadius: 25,
        marginTop: 25
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textButton: {
        color: this.props.color,
        fontSize: 14,
        fontWeight: 'bold'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.textButton}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}