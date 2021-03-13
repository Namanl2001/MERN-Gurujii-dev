import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';

class Logout extends Component {
  onSuccess = () => {
    // alert("logout success");
    this.props.log();
  };

  onFail = () => {
    alert('logout Failed');
  };
  render() {
    return (
      <div>
        <GoogleLogout
          clientId='245240540416-fs5i5j4omlae8ifjcffuai5717amq8if.apps.googleusercontent.com'
          buttonText='Signout'
          onLogoutSuccess={this.onSuccess}
          onFailure={this.onFail}
          theme='dark'
        />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    log: () => dispatch({ type: 'LOGOUT' }),
  };
};

export default connect(null, mapDispatchtoProps)(Logout);
