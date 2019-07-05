import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import IMessage from './interfaces/message.interface'

interface IProps {
    messages: IMessage[]
}

export default class Messages extends React.Component<IProps> {

    constructor(props) {
        super(props)
    }

    render() {  
        const feed = this.props.messages.map(m => {
            return(
                <View key={Math.random()}>
                    <Text>{m.message}</Text>
                    <Text>{m.sentBy}</Text>
                    <Text>{m.date.toLocaleTimeString()}</Text>
                </View>
            )
        })
        return (
            <ScrollView>
                {feed}
            </ScrollView>
        )
    }
}