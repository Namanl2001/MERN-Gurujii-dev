import React, { Component } from 'react';
import Chatbot from '../components/chatbot';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Board from '../assets/board.jpg';
import Navbar from '../components/navbar';
import AOS from 'aos';
import Reach from '../components/Reach';
import Vision from '../components/ourvision';
import ScrollToTop from './scrollToTop';
import Contributors from '../components/contributors';
import 'aos/dist/aos.css';
class about extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      delay: 1000,
    });
  }
  render() {
    return (
      <>
        <div className='parallax'>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='center'>
            <img data-aos='fade-up' src={Board} alt='' />
          </div>
          <br />
          <br />
          <br />
        </div>
        <Chatbot />
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
              <a href='https://github.com/Namanl2001/MERN-Gurujii-dev'>
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
                <span>LinkedIn</span>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
        <ScrollToTop />
        <br />
        <div className='bigbtn-container' data-aos='fade-up'>
          <a href='/home'>
            <button className='bigbtn hvr-bounce-to-top'>
              <h2>Find Tutors in your locality!</h2>
            </button>
          </a>
        </div>
        <Vision />
        <Reach />

        <Contributors />
        <br />
      </>
    );
  }
}

export default about;
