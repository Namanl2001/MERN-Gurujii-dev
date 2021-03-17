import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getregisteredUserData } from '../store/reducer/user';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '245240540416-fs5i5j4omlae8ifjcffuai5717amq8if.apps.googleusercontent.com';

class Login extends Component {
  onSuccess = res => {
    // console.log("Login Success: currentUser:", res.profileObj);
    this.props.getregisteredUserData(res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
    // this.props.log(res.profileObj.email);
  };

  onFailure = res => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping to the developer if problem persists`
    );
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText='Signin with Google'
          theme='dark'
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
  }
}

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     log: (e) => dispatch({ type: "LOGIN", email: e }),
//     getregisteredUserData: getregisteredUserData,
//     // bindActionCreators({getregisteredUserData}, dispatch)
//   };
// };

// export default connect(null, mapDispatchtoProps)(Login);

export default connect(state => state, { getregisteredUserData })(Login);
