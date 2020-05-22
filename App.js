import 'react-native-gesture-handler';
import React, {Component} from 'react';

import StackNavigator from './src/screens/StackNavigator';
 

 
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }

 
  render() {
  
    return (
       
        <StackNavigator />
      
    );
  }
}
