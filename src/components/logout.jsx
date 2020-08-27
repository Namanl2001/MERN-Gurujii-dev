import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";

class Logout extends Component {
  onSuccess = () => {
    // alert("logout success");
    this.props.log();
  };
  onFail = () => {
    alert("logout Failed");
  };
  render() {
    return (
      <div>
        <GoogleLogout
          clientId="978019912180-pkj7ui7u7g30901ob00nbnarlgfvkr09.apps.googleusercontent.com"
          buttonText="Signout"
          onLogoutSuccess={this.onSuccess}
          onFailure={this.onFail}
          theme="dark"
        />
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    log: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(null, mapDispatchtoProps)(Logout);
