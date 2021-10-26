import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Dropdown, Button } from 'bootstrap-4-react';

class filter extends Component {
  state = {
    pin: '',
    name: '',
  };

  clearfield() {
    this.setState({ pin: '' });
    this.setState({ name: '' });
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePinChange = e => {
    this.setState({
      pin: e.target.value,
    });
  };

  handleSubmitName = e => {
    e.preventDefault();
    this.props.username(this.state.name);
  };

  handleSubmitPIN = e => {
    e.preventDefault();
    this.props.pin(this.state.pin);
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmitPIN} className='form1'>
            <input
              className='textbox'
              type='number'
              onChange={this.handlePinChange}
              value={this.state.pin}
              placeholder='Search by Pin-Code'
              mr='sm-9'
              min='111111'
              max='999999'
            />
            <input title='Search' value='' type='submit' className='button' />
          </form>
          <form onSubmit={this.handleSubmitName} className='form2'>
            <input
              className='textbox'
              type='string'
              onChange={this.handleNameChange}
              value={this.state.name}
              placeholder='Search by Name'
              mr='sm-9'
            />
            <input title='Search' value='' type='submit' className='button' />
          </form>
        </div>
        <br />
        <br />
        <div className='alignment'>
          <Dropdown
            style={{
              marginRight: '2em',
            }}
          >
            <Dropdown.Button primary id='dropdownMenuButton'>
              {this.props.tutor}
            </Dropdown.Button>
            <Dropdown.Menu aria-labelledby='dropdownMenuButton'>
              <Dropdown.Item onClick={this.props.alltut}>All</Dropdown.Item>
              <Dropdown.Item onClick={this.props.home}>
                Home Tutor
              </Dropdown.Item>
              <Dropdown.Item onClick={this.props.exe}>
                External Tutor
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            style={{
              marginRight: '2em',
            }}
          >
            <Dropdown.Button primary id='dropdownMenuButton'>
              {this.props.subject}
            </Dropdown.Button>
            <Dropdown.Menu aria-labelledby='dropdownMenuButton'>
              <Dropdown.Item onClick={this.props.allsub}>All</Dropdown.Item>
              <Dropdown.Item onClick={this.props.phy}>Physics</Dropdown.Item>
              <Dropdown.Item onClick={this.props.che}>Chemistry</Dropdown.Item>
              <Dropdown.Item onClick={this.props.mat}>Maths</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            style={{
              marginRight: '2em',
            }}
          >
            <Dropdown.Button primary id='dropdownMenuButton'>
              {this.props.class}
            </Dropdown.Button>
            <Dropdown.Menu aria-labelledby='dropdownMenuButton'>
              <Dropdown.Item onClick={this.props.allcls}>All</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c9}>9 th</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c10}>10 th</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c11}>11 th</Dropdown.Item>
              <Dropdown.Item onClick={this.props.c12}>12 th</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='alignment'>
          <Button
            secondary
            onClick={() => {
              this.props.clr();
              this.clearfield();
            }}
          >
            X Clear Filters
          </Button>
        </div>
      </div>
    );
  }
}

// export default filter;

const mapStatetoProps = state => {
  return {
    tutor: state.tutor,
    subject: state.subject,
    class: state.class,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    pin: pin => dispatch({ type: 'PIN', pin: pin }),
    alltut: () => dispatch({ type: 'ALLTUT' }),
    home: () => dispatch({ type: 'HOME' }),
    exe: () => dispatch({ type: 'EXE' }),
    username: username => dispatch({ type: 'NAME', username: username }),

    allsub: () => dispatch({ type: 'ALLSUB' }),
    phy: () => dispatch({ type: 'PHY' }),
    che: () => dispatch({ type: 'CHE' }),
    mat: () => dispatch({ type: 'MAT' }),

    allcls: () => dispatch({ type: 'ALLCLS' }),
    c9: () => dispatch({ type: 'C9' }),
    c10: () => dispatch({ type: 'C10' }),
    c11: () => dispatch({ type: 'C11' }),
    c12: () => dispatch({ type: 'C12' }),

    clr: () => dispatch({ type: 'CLR' }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(filter);
