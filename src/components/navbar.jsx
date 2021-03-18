import React, { Component } from 'react';
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
        if (response.status == 200) {
          axios.get(`/users/sendMail/${this.props.emailid}/2`);
          if (alert(`Your profile deleted successfully.....!! `)) {
          } else window.location.reload();
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
            <Navbar expand='lg' dark bg='dark'>
              <Navbar.Brand href='#'>GuruJii</Navbar.Brand>
              <Navbar.Toggler target='#navbarSupportedContent' />
              <Collapse navbar id='navbarSupportedContent'>
                <Navbar.Nav ml='auto'>
                  <Nav.Item active>
                    <Nav.Link href='#'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='#'>Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item dropdown>
                    <Nav.Link dropdownToggle>Dropdown</Nav.Link>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Navbar.Nav>
                <Button
                  warning
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
            <Navbar expand='lg' dark bg='dark'>
              <Navbar.Brand href='#'>GuruJii</Navbar.Brand>
              <Navbar.Toggler target='#navbarSupportedContent' />
              <Collapse navbar id='navbarSupportedContent'>
                <Navbar.Nav ml='auto'>
                  <Nav.Item active>
                    <Nav.Link href='#'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='#'>Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item dropdown>
                    <Nav.Link dropdownToggle>Dropdown</Nav.Link>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Something else</Dropdown.Item>
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
            <Navbar expand='lg' dark bg='dark'>
              <Navbar.Brand href='#'>GuruJii</Navbar.Brand>
              <Navbar.Toggler target='#navbarSupportedContent' />
              <Collapse navbar id='navbarSupportedContent'>
                <Navbar.Nav ml='auto'>
                  <Nav.Item active>
                    <Nav.Link href='#'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='#'>Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item dropdown>
                    <Nav.Link dropdownToggle>Dropdown</Nav.Link>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Something else</Dropdown.Item>
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

        {this.state.hidden ? (
          ' '
        ) : (
          <div
            className='alert alert-success alert-dismissible fade show myalert'
            // style="margin-bottom:0"
          >
            <button type='button' className='close' data-dismiss='alert'>
              &times;
            </button>
            <strong>Great Landing !</strong> Teachers have to signin to make
            profile.
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
