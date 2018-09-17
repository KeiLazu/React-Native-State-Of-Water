import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      phase: 'Liquid',
      temperature: '50'
    }
  }

  ChangeState(temp) {
    if (temp < 32) {
      this.setState({
        phase: 'Solid'
      });
    } else if (temp > 212) {
      this.setState({
        phase: 'Gas'
      });
    } else {
      this.setState({
        phase: 'Liquid'
      });
    }

    this.setState({
      temperature: temp
    });
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.phase}</Text>
        <TextInput 
            keyboardType='numeric'
            onChangeText={(temp) => this.ChangeState(temp)}
            value={this.state.temperature}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
