import React, {Component} from 'react';
import { View, StyleSheet, TouchableHighlight, Animated, Text,TextInput, TouchableOpacity,Modal } from "react-native";
 

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      isVisible: false,
     
    };
  }
 

render() {
 
    return (
      <View style={styles.container}>
       <Text>Test</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffffff"
  } , 
});
