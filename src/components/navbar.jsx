import React, { Component } from 'react';
import Clock from 'react-live-clock';
import logo from '../assets/logo.png';

// import ReactDOM from 'react-dom';
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Collapse,
  Modal,
} from 'bootstrap-4-react';

import { connect } from 'react-redux';
import Login from './login';
import Logout from './logout';
import Form1 from './form';
import Update from './update';
import axios from 'axios';
import './style.css';

class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    axios
      .delete(`/users/delete/${this.props.id}`)
      .then(response => {
        if (response.status === 200) {
          axios.get(`/users/sendMail/${this.props.emailid}/2`);
          if (!alert(`Your profile deleted successfully.....!! `)) {
            window.location.reload();
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <div>
        {this.props.logged && !this.props.registeredUser && (
          <div>
            <Navbar expand='lg' dark bg='dark' fixed='top' className='navbar'>
              <Navbar.Brand href='#'>
                {' '}
                <div className='navbar-logo'>
                  <img className='logo-image' src={logo} />
                </div>
              </Navbar.Brand>
              <Navbar.Toggler target='#navbarSupportedContent' />
              <Collapse navbar id='navbarSupportedContent'>
                <Navbar.Nav ml='auto'>
                  <div className='clk'>
                    <Clock format={'hh:mmA'} ticking={true} />
                  </div>

                  <Nav.Item active>
                    <Nav.Link href='/'>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active>
                    <Nav.Link href='/home'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active dropdown>
                    <Nav.Link dropdownToggle href='#'>
                      More
                    </Nav.Link>
                    <Dropdown.Menu>
                      <Dropdown.Item href='/healthtips'>
                        Health Tips
                      </Dropdown.Item>
                      <Dropdown.Item href='/contactus'>
                        Contact Us
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() => {
                          window.localStorage.setItem(
                            'muted',
                            JSON.parse(window.localStorage.getItem('muted'))
                              ? 'false'
                              : 'true'
                          );
                          window.location.reload();
                        }}
                      >
                        {JSON.parse(window.localStorage.getItem('muted'))
                          ? 'Mute Chatbot'
                          : 'Unmute Chatbot'}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Navbar.Nav>
                <Button
                  className='profile-button'
                  mr='sm-4'
                  data-toggle='modal'
                  data-target='#Modal'
                >
                  Create Profile
                </Button>
                <Logout />
              </Collapse>
            </Navbar>
            <Modal id='Modal' fade>
              <Modal.Dialog centered>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>
                      Register here (except class 2,3,4 all mandatory)
                    </Modal.Title>
                    <Modal.Close>
                      <span aria-hidden='true'>&times;</span>
                    </Modal.Close>
                  </Modal.Header>
                  <Form1 />
                </Modal.Content>
              </Modal.Dialog>
            </Modal>
          </div>
        )}

        {this.props.logged && this.props.registeredUser && (
          <div>
            <Navbar expand='lg' dark bg='dark' fixed='top' className='navbar'>
              <Navbar.Brand href='#'>
                <div className='navbar-logo'>
                  <img className='logo-image' src={logo} />
                </div>
              </Navbar.Brand>
              <Navbar.Toggler target='#navbarSupportedContent' />
              <Collapse navbar id='navbarSupportedContent'>
                <Navbar.Nav ml='auto'>
                  <div className='clk'>
                    <Clock format={'hh:mmA'} ticking={true} />
                  </div>
                  <Nav.Item active>
                    <Nav.Link href='/'>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active>
                    <Nav.Link href='/home'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active dropdown>
                    <Nav.Link dropdownToggle href='#'>
                      More
                    </Nav.Link>
                    <Dropdown.Menu>
                      <Dropdown.Item href='/healthtips'>
                        Health Tips
                      </Dropdown.Item>
                      <Dropdown.Item href='/contactus'>
                        Contact Us
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() => {
                          window.localStorage.setItem(
                            'muted',
                            JSON.parse(window.localStorage.getItem('muted'))
                              ? 'false'
                              : 'true'
                          );
                          window.location.reload();
                        }}
                      >
                        {JSON.parse(window.localStorage.getItem('muted'))
                          ? 'Mute Chatbot'
                          : 'Unmute Chatbot'}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Navbar.Nav>
                <Button
                  danger
                  mr='sm-4'
                  data-toggle='modal'
                  data-target='#Modal1'
                >
                  Delete Profile
                </Button>
                <Button
                  secondary
                  mr='sm-4'
                  data-toggle='modal'
                  data-target='#Modal'
                >
                  Update Profile
                </Button>
                <Logout />
              </Collapse>
            </Navbar>

            <Modal id='Modal' fade>
              <Modal.Dialog centered>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>Update Profile</Modal.Title>
                    <Modal.Close>
                      <span aria-hidden='true'>&times;</span>
                    </Modal.Close>
                  </Modal.Header>
                  <Update />
                </Modal.Content>
              </Modal.Dialog>
            </Modal>

            <Modal id='Modal1' fade className='modal fade'>
              <Modal.Dialog centered className='modal-dialog modal-confirm'>
                <Modal.Content className='modal-content'>
                  <Modal.Header className='modal-header flex-column'>
                    <div className='icon-box'>
                      <i className='fa fa-exclamation-triangle'></i>
                    </div>
                    <h4 className='modal-title w-100'>Are you sure?</h4>
                    {/* <Modal.Title className="modal-heading"></Modal.Title> */}
                    <Modal.Close>
                      <span aria-hidden='true'>&times;</span>
                    </Modal.Close>
                  </Modal.Header>
                  <Modal.Body className='modal-body'>
                    <p className='modal-subHeading'>
                      Do you really want to delete your profile permanently ?
                      This process cannot be undone.
                    </p>
                  </Modal.Body>
                  <Modal.Footer className='modal-footer justify-content-center'>
                    <Button secondary data-dismiss='modal'>
                      Close
                    </Button>
                    <Button
                      danger
                      onClick={this.handleSubmit}
                      data-dismiss='modal'
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal.Dialog>
            </Modal>
          </div>
        )}

        {!this.props.logged && (
          <div>
            <Navbar expand='lg' dark bg='dark' fixed='top' className='navbar'>
              <Navbar.Brand href='#'>
                <div className='navbar-logo'>
                  <img className='logo-image' src={logo} />
                </div>
              </Navbar.Brand>
              <Navbar.Toggler target='#navbarSupportedContent' />
              <Collapse navbar id='navbarSupportedContent'>
                <Navbar.Nav ml='auto'>
                  <div className='clk'>
                    <Clock format={'hh:mmA'} ticking={true} />
                  </div>
                  <Nav.Item active>
                    <Nav.Link href='/'>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active>
                    <Nav.Link href='/home'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active dropdown>
                    <Nav.Link dropdownToggle href='#'>
                      More
                    </Nav.Link>
                    <Dropdown.Menu>
                      <Dropdown.Item href='/healthtips'>
                        Health Tips
                      </Dropdown.Item>
                      <Dropdown.Item href='/contactus'>
                        Contact Us
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() => {
                          window.localStorage.setItem(
                            'muted',
                            JSON.parse(window.localStorage.getItem('muted'))
                              ? 'false'
                              : 'true'
                          );
                          window.location.reload();
                        }}
                      >
                        {JSON.parse(window.localStorage.getItem('muted'))
                          ? 'Mute Chatbot'
                          : 'Unmute Chatbot'}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Navbar.Nav>
                <Login />
              </Collapse>
            </Navbar>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ hidden: true });
    }, 12000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

const mapStatetoProps = state => {
  return {
    emailid: state.email,
    logged: state.loggedin,
    registeredUser: state.registeredUser,
    id: state.registeredUserData._id,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    email: email => dispatch({ type: 'Email', email: email }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(navbar);
