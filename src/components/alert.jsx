import React, { Component } from 'react';
import './style.css';

class alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }

  timer = setInterval(() => {
    this.setState({ hidden: true });
  }, 10000);

  render() {
    return (
      <div>
        {this.state.hidden ? (
          ' '
        ) : (
          <div
            className='alert alert-success alert-dismissible fade show myalert'
            // style="margin-bottom:0"
          >
            <p>
              <strong>Great Landing !</strong> Teachers have to signin to make
              profile.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default alert;
