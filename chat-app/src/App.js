import React, { Component } from 'react';
import './App.css'
import MessageForm from './MessageForm'
import MessageList from './MessageList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }
  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, {me: true, author: 'Me', body: text }]
    })
  }
  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}

export default App;
