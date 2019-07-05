import React from 'react';
import { Button, TextInput, View } from 'react-native';

interface IProps {
    sendMessage: any
}

interface IState {
    message: string
}

export default class TextBox extends React.Component<IProps, IState> {

    constructor(props) {
        super(props)
        this.state = {
            message: null
        }
        this.handlePress = this.handlePress.bind(this)
        this.handleTyping = this.handleTyping.bind(this) 
    }

    handlePress() {
        if (this.state.message !== '') {
            this.props.sendMessage(this.state.message)
        }
    }

    handleTyping(e: any) {
        this.setState({
            message: e
        })
    }

    render() {  
        return (
            <View>
                <TextInput 
                placeholder="Type your message"
                onChangeText={(text) => this.handleTyping(text)}
                />
                <Button 
                title="send" 
                onPress={this.handlePress}>Send</Button>
            </View>
        )
    }
}