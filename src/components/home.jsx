import React, { Component } from 'react';
import { getInitalData } from '../store/reducer/user';
import { connect } from 'react-redux';
import Card from './card';
import Filter from './filter';
import { Container, Row } from 'bootstrap-4-react';
import { Progress } from 'bootstrap-4-react';
import ScrollToTop from './scrollToTop';
import Navbar from '../components/navbar';
import Chatbot from '../components/chatbot';
import Alert from '../components/alert';
import Sidebar from './Sidebar';

class home extends Component {
  componentDidMount() {
    this.props.getInitalData();
  }

  List() {
    if (this.props.users.length) {
      var currentIndex = this.props.users.length;
      var array = this.props.users;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        var temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return this.props.users.map(currentuser => {
        return <Card user={currentuser} key={currentuser._id} />;
      });
    } else {
      return (
        <div>
          <h2>Sorry!! No results found.</h2>
          <br />
          <br />
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <div>
          <Navbar />
          <Alert />
          <br />
          <br />
          <br />
          <br />
        </div>
        <Chatbot />
        {!this.props.isDataInitialized && (
          <Progress mb='4' w='25%'>
            <Progress.Bar striped animated min='0' max='100' mx='auto' now='50'>
              Initializing data
            </Progress.Bar>
          </Progress>
        )}
        {this.props.isDataInitialized && (
          <div>
            <div className='text-center'>
              <br />
              <h1>Plan Your Future With US !!</h1>
              <hr className='w-25 mx-auto pt-5' />
            </div>
            <Filter />
            <Container
              style={{
                marginTop: '5em',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Row>{this.List()}</Row>
            </Container>
            <Sidebar />
            <ScrollToTop />
            <br />
          </div>
        )}
      </>
    );
  }
}

export default connect(state => state, { getInitalData })(home);
