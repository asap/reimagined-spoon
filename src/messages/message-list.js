import React, { Component } from 'react';
import MessageView from './message-view';

class MessageList extends Component {
  state = {
    messages: [
      {
        from: 'Martha',
        content: 'Starting soon',
        status: 'unread',
      }, {
        from: 'Martha',
        content: 'I will be traveling home soon',
        status: 'read',
      }, {
        from: 'Martha',
        content: 'Talk later',
        status: 'read',
      }
    ]
  }

  render() {
    const messageViews = this.state.messages.map((message, index) => <MessageView key={index} message={message} />);
    return (
      <div>
        <h1>List of Messages</h1>
        {messageViews}
      </div>
    )
  }
}

export default MessageList;
