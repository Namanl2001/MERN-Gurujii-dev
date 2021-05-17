import React, { Component } from 'react';
import { getInitalData } from '../store/reducer/user';
import { connect } from 'react-redux';
import Card from './card';
import Filter from './filter';
import { Container, Row } from 'bootstrap-4-react';
import { Progress } from 'bootstrap-4-react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import ScrollToTop from './scrollToTop';
import Board from '../assets/board.jpg';
import Navbar from '../components/navbar';
import Chatbot from '../components/chatbot';
import Alert from '../components/alert';
import Reach from '../components/Reach';
import Vision from '../components/ourvision';

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
        <div className='parallax'>
          <Navbar />
          <Alert />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='center'>
            <img src={Board} alt='' />
          </div>
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
            <div className='social'>
              <ul>
                <li>
                  <a href='/#'>
                    <span>WhatsApp</span>
                    <WhatsAppIcon />
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <span>Facebook</span>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <span>Github</span>
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <span>Instagram</span>
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <span>YouTube</span>
                    <YouTubeIcon />
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <span>LinkedIn</span>
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
            <ScrollToTop />
            <Vision />
            <Reach />
            <br />
          </div>
        )}
      </>
    );
  }
}

export default connect(state => state, { getInitalData })(home);
