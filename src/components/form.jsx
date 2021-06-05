import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button, Form, Row, Col } from 'bootstrap-4-react';

toast.configure();
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class form extends Component {
  state = {
    title: '',
    userName: this.props.currentUser,
    subject: '',
    tutor: '',
    coachingName: '',
    qualification: '',
    about: '',
    c1: null,
    c2: '',
    c3: '',
    c4: '',
    address: '',
    city: '',
    pin: null,
    phone: null,
    image: null,
    errormessage1: '',
    errormessage2: '',
    errors: {
      title: '*',
      userName: '',
      subject: '*',
      tutor: '*',
      coachingName: '*',
      qualification: '*',
      about: '*',
      c1: '*',
      address: '*',
      city: '*',
      pin: '*',
      phone: '*',
    },
  };

  handleChange = e => {
    let nam = e.target.id;
    let val = e.target.value;
    let errors = this.state.errors;
    const pinRegex = RegExp(/[1-9][0-9]{5}/);
    const phoneRegex = RegExp(/^[0-9\b]+$/);
    let err = '';
    if (nam === 'pin') {
      if (!pinRegex.test(val) || (val.length !== 6 && val !== '')) {
        err = <span style={{ color: 'red' }}>Please enter valid pincode!</span>;
        document.getElementById('pin').style.border = '1px solid red';
      } else {
        document.getElementById('pin').style.borderColor = '';
      }
      this.setState({ errormessage1: err });
    }

    if (nam === 'phone') {
      if (!phoneRegex.test(val) || (val.length !== 10 && val !== '')) {
        err = (
          <span style={{ color: 'red' }}>Please enter valid phone number!</span>
        );
        document.getElementById('phone').style.border = '1px solid red';
      } else {
        document.getElementById('phone').style.borderColor = '';
      }
      this.setState({ errormessage2: err });
    }

    switch (nam) {
      case 'title':
        errors.title = val === '' ? '*' : '';
        break;
      case 'userName':
        errors.userName = val.length < 1 ? '*' : '';
        break;
      case 'subject':
        errors.subject = val === '' ? '*' : '';
        break;
      case 'tutor':
        errors.tutor = val === '' ? '*' : '';
        break;
      case 'coachingName':
        errors.coachingName = val.length < 1 ? '*' : '';
        break;
      case 'qualification':
        errors.qualification = val.length < 1 ? '*' : '';
        break;
      case 'about':
        errors.about = val.length < 1 ? '*' : '';
        break;
      case 'c1':
        errors.c1 = val.length < 1 ? '*' : '';
        break;
      case 'address':
        errors.address = val.length < 1 ? '*' : '';
        break;
      case 'city':
        errors.city = val.length < 1 ? '*' : '';
        break;
      case 'pin':
        errors.pin = val.length < 1 ? '*' : '';
        break;
      case 'phone':
        errors.phone = val.length < 1 ? '*' : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      const data = new FormData();
      data.append('file', this.state.image);
      data.append('email', this.props.emailid);
      data.append('title', this.state.title);
      data.append('userName', this.state.userName);
      data.append('subject', this.state.subject);
      data.append('tutor', this.state.tutor);
      data.append('coachingName', this.state.coachingName);
      data.append('qualification', this.state.qualification);
      data.append('about', this.state.about);
      data.append('c1', this.state.c1);
      data.append('c2', this.state.c2);
      data.append('c3', this.state.c3);
      data.append('c4', this.state.c4);
      data.append('address', this.state.address);
      data.append('city', this.state.city);
      data.append('pin', this.state.pin);
      data.append('phone', this.state.phone);

      axios
        .post('/users/add', data)
        .then(response => {
          if (response.status === 200) {
            axios.get(`/users/sendMail/${this.props.emailid}/1`);
            if (
              !alert(
                `Congratulations!! ${this.state.userName.toUpperCase()} Your profile added successfully to our database `
              )
            ) {
              window.location.reload();
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error('Please fill out all the required fields to proceed');
    }
  };

  render() {
    return (
      <div>
        <Modal.Body>
          <Form>
            <div className='formRoot'>
              <div className='form-child-left'>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='staticEmail'>
                    Email
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.PlainText value={this.props.emailid}></Form.PlainText>
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='title'>
                    Title
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.title}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.CustomSelect
                      sm
                      mb='3'
                      id='title'
                      onChange={this.handleChange}
                      value={this.state.title}
                    >
                      <option defaultValue hidden>
                        Open this to select title
                      </option>
                      <option value='Mr.'>Mr.</option>
                      <option value='Mrs.'>Mrs.</option>
                      <option value='Ms.'>Ms.</option>
                    </Form.CustomSelect>
                  </Col>
                </Row>

                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='userName'>
                    Name
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.userName}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.Input
                      id='userName'
                      type='text'
                      placeholder='Enter Full Name'
                      onChange={this.handleChange}
                      value={this.state.userName}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='subject'>
                    Subject
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.subject}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.CustomSelect
                      sm
                      mb='3'
                      id='subject'
                      onChange={this.handleChange}
                      value={this.state.subject}
                    >
                      <option defaultValue hidden>
                        Open this to select subject
                      </option>
                      <option value='physics'>Physics</option>
                      <option value='chemistry'>Chemistry</option>
                      <option value='mathematics'>Mathematics</option>
                    </Form.CustomSelect>
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='tutor'>
                    Tutor
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.tutor}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.CustomSelect
                      sm
                      mb='3'
                      id='tutor'
                      onChange={this.handleChange}
                      value={this.state.tutor}
                    >
                      <option defaultValue hidden>
                        Open this to select tutor type
                      </option>
                      <option value='Home Tutor'>Home Tutor</option>
                      <option value='External Tutor'>External Tutor</option>
                    </Form.CustomSelect>
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='coachingName'>
                    Coaching
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.coachingName}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.Input
                      id='coachingName'
                      type='text'
                      placeholder='Enter coaching name'
                      onChange={this.handleChange}
                      value={this.state.coachingName}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='qualification'>
                    Qualification
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.qualification}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.Input
                      id='qualification'
                      type='text'
                      placeholder='Enter your Qualification'
                      onChange={this.handleChange}
                      value={this.state.qualification}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='about'>
                    About
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.about}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-8'>
                    <Form.Input
                      id='about'
                      type='text'
                      placeholder='Write about your teaching methodolgy'
                      onChange={this.handleChange}
                      value={this.state.about}
                    />
                  </Col>
                </Row>
              </div>
              <div className='form-child-right'>
                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='c1'>
                    Class 1
                    <nobr style={{ color: 'red' }}>{this.state.errors.c1}</nobr>
                  </Form.LabelCol>
                  <Col col='sm-3'>
                    <Form.Input
                      id='c1'
                      type='number'
                      placeholder="e.g. : '9' "
                      onChange={this.handleChange}
                      value={this.state.c1}
                    />
                  </Col>
                  <Form.LabelCol col='sm-3' htmlFor='c2'>
                    Class 2
                  </Form.LabelCol>
                  <Col col='sm-3'>
                    <Form.Input
                      id='c2'
                      type='number'
                      placeholder="e.g. : '10' "
                      onChange={this.handleChange}
                      value={this.state.c2}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.LabelCol col='sm-3' htmlFor='c3'>
                    Class 3
                  </Form.LabelCol>
                  <Col col='sm-3'>
                    <Form.Input
                      id='c3'
                      type='number'
                      placeholder="e.g. : '11' "
                      onChange={this.handleChange}
                      value={this.state.c3}
                    />
                  </Col>
                  <Form.LabelCol col='sm-3' htmlFor='c2'>
                    Class 4
                  </Form.LabelCol>
                  <Col col='sm-3'>
                    <Form.Input
                      id='c4'
                      type='number'
                      placeholder="e.g. : '12' "
                      onChange={this.handleChange}
                      value={this.state.c4}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.LabelCol col='sm-2' htmlFor='address'>
                    Address
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.address}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-10'>
                    <Form.Input
                      id='address'
                      type='text'
                      placeholder='Enter coaching address'
                      onChange={this.handleChange}
                      value={this.state.address}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-2' htmlFor='city'>
                    City
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.city}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-10'>
                    <Form.Input
                      id='city'
                      type='text'
                      placeholder='Enter City'
                      onChange={this.handleChange}
                      value={this.state.city}
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-2' htmlFor='pin'>
                    Pin
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.pin}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-10'>
                    <Form.Input
                      id='pin'
                      type='number'
                      placeholder='6-digit postal-code'
                      onChange={this.handleChange}
                      value={this.state.pin}
                    />
                    <span style={{ color: 'red' }}>
                      {this.state.errormessage1}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-2' htmlFor='phone'>
                    Phone
                    <nobr style={{ color: 'red' }}>
                      {this.state.errors.phone}
                    </nobr>
                  </Form.LabelCol>
                  <Col col='sm-10'>
                    <Form.Input
                      id='phone'
                      type='number'
                      placeholder='10-digit number'
                      onChange={this.handleChange}
                      value={this.state.phone}
                    />
                    <span>{this.state.errormessage2}</span>
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-2' htmlFor='profile-pic'>
                    Profile Picture
                  </Form.LabelCol>
                  <Col col='sm-10'>
                    <input
                      type='file'
                      name='file'
                      onChange={e =>
                        this.setState({ image: e.target.files[0] })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.LabelCol col='sm-2' htmlFor='profile-pic'>
                    Profile Picture
                  </Form.LabelCol>
                  <Col col='sm-10'>
                    <input
                      type='file'
                      name='file'
                      onChange={e =>
                        this.setState({ image: e.target.files[0] })
                      }
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button secondary data-dismiss='modal'>
            Close
          </Button>
          <Button primary onClick={this.handleSubmit} data-dismiss='modal'>
            Submit
          </Button>
        </Modal.Footer>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    emailid: state.email,
    logged: state.loggedin,
    currentUser: state.currentUser,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    email: email => dispatch({ type: 'Email', email: email }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(form);
