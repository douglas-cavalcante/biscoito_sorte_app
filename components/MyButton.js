import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      buttonStyle: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: this.props.color,
        backgroundColor: this.props.bgColor,
        borderRadius: 25,
        marginTop: 25
      },
      buttonArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      buttonText: {
        color: this.props.color,
        fontSize: 24,
        fontWeight: "bold"
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.buttonStyle} onPress={this.props.onPress}>
        <View style={this.styles.buttonArea}>
          <Text style={this.styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
