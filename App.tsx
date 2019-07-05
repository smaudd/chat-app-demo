import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Messages from './Messages';
import IMessage from './interfaces/message.interface';
import io from 'socket.io-client';
import TextBox from './TextBox';

interface IProps {

}

interface IState {
  socket: any
}

const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ['websocket'], // you need to explicitly tell it to use websockets
 };

export default class App extends React.Component<IProps, IState> { 

  constructor(props) {
    super(props)
    this.state = {
      socket: io('https://chat-test-api.herokuapp.com/')
    }
    const socket = io.connect('http://127.0.0:3000', connectionConfig)
    socket.on('connect', () => {
      console.log('ready')
    })
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(message: string) {
    const s = io.connect('https://chat-test-api.herokuapp.com/')
    s.on('connect', () => {
      console.log('Connected')
    })
    const { socket } = this.state.socket
    this.state.socket.emit('chat', message)
  }

  render() {
    const messages: IMessage[] = [
      { message: "Hello!", sentBy: "Santiago", date: new Date() }
    ]
    return (
      <View style={styles.container}>
        <Text>Hello Wosrld</Text>
        <Messages messages={messages} />
        <TextBox sendMessage={this.sendMessage} />
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
