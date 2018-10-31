import React, { Component } from 'react';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: ""
    };
  }

  handleEventChange = (event) => {
    this.setState({
      eventName: event.target.value
    });
  }

  render() {
    return (
      <div className="">
        <header className="">
          <h5> Event Name: </h5>
          <input type="text" value={this.state.eventName} onChange={this.handleEventChange}/>
        </header>
      </div>
    );
  }
}

export default CreateEvent;
