import React, { Component } from 'react';
import { sendMessage } from '../store'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export class NewMessageEntry extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = e.target.content.value;
    this.props.submitMessage({ content: message, channelId: this.props.channelId })
  }

  render() {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispath) => ({
  submitMessage: (message) => dispath(sendMessage(message))
})

export default withRouter(connect(null, mapDispatchToProps)(NewMessageEntry));


