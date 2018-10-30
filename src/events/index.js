import React, { Component } from 'react';
import './styles.css';

class EventRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventPIN: ''
    };
  }
  handleEventPINChange = (event) => {
    this.setState({
      eventPIN: event.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="join-event-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">JOIN EVENT</span>
            </div>
            <input type="text" value={this.state.eventPIN} className="form-control event-pin" aria-label="With textarea" onChange={this.handleEventPINChange}></input>
          </div>
          </div>
      </div>
    );
  }
}

export default EventRegistration;
