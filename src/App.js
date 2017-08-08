import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import firebase from './firebase';

export default class App extends Component {

  state = {
    username: 'NOT LOADED'
  };

  // On mount, subscribe to ref updates
  componentDidMount() {
    this.ref = firebase.database().ref('users/7xl2Rw8EI7N5A1qZCAtdwtWql752');
    this.ref.on('value', this.handlePostUpdate);
  }

  // On unmount, ensure we no longer listen for updates
  componentWillUnmount() {
    if (this.ref) {
      this.ref.off('value', this.handlePostUpdate);
    }
  }

  // Bind the method only once to keep the same reference
  handlePostUpdate = (snapshot) => {
    console.log('Post Content', snapshot.val());
    this.setState({ username: snapshot.val().username })

  }

  render() {
    const { loginView } = styles;

    return (
      <View style={loginView}>
        <Text>{this.state.username}</Text>
      </View>
    )
  }
}

const styles = {
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
};